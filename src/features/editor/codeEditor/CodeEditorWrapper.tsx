import { useCallback, useEffect, useRef, useState } from 'react';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';
import { useUpdateContent } from '@/lib/dataSource/features/fileSystem/useUpdateContent';
import { CachedContentSubscriber } from '@/lib/stateManagement/eventSubscriber/CachedContentSubscriber';
import { isCachedContentEvent } from '@/lib/stateManagement/eventSubscriber/check/isCachedContentEvent';
import { debounce } from 'throttle-debounce';
import { Keys } from '@/lib/stateManagement/eventSubscriber/keys/Keys';
import { SelectedTabSubscriber } from '@/lib/stateManagement/eventSubscriber/SelectedTabSubscriber';

export function CodeEditorWrapper() {
  const { updateContent } = useUpdateContent();
  const [selectedFile, setSelectedFile] = useState<CachedContentPayload>();
  const [content, setContent] = useState('');
  const isFirstFileRenderRef = useRef(true);

  useEffect(() => {
    const cachedContentSubscriber = CachedContentSubscriber.create().subscribe(
      Keys.TabChange,
      (name, value) => {
        if (isCachedContentEvent(value)) {
          setSelectedFile(undefined);

          setTimeout(() => {
            isFirstFileRenderRef.current = true;
            setSelectedFile(value);
            setContent(value.content);
          }, 1);

          return;
        }
      },
    );

    SelectedTabSubscriber.create().subscribe('selected_tab', (msg, data) => {
      if (!data) {
        setSelectedFile(undefined);
        isFirstFileRenderRef.current = true;
      }
    });

    return () => {
      PubSub.unsubscribe(cachedContentSubscriber);
    };
  }, []);

  useEffect(() => {
    if (selectedFile && !isFirstFileRenderRef.current) {
      isFirstFileRenderRef.current = false;

      updateContent({
        fileId: selectedFile.id,
        projectId: selectedFile.projectId,
        content: content,
      });

      CachedContentSubscriber.create().updateCache(selectedFile.id, {
        id: selectedFile.id,
        projectId: selectedFile.projectId,
        content: content,
        userId: selectedFile.userId,
      });
    }
  }, [content, selectedFile]);

  const onChange = useCallback(
    debounce(500, (text: string) => {
      if (selectedFile) {
        isFirstFileRenderRef.current = false;
        setContent(text);
      }
    }),
    [selectedFile],
  );

  return (
    <>{selectedFile && <CodeEditor value={content} onChange={onChange} />}</>
  );
}
