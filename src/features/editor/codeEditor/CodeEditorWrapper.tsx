import { useCallback, useEffect, useState } from 'react';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';
import { useUpdateContent } from '@/lib/dataSource/features/fileSystem/useUpdateContent';
import { CachedContentSubscriber } from '@/lib/stateManagement/eventSubscriber/CachedContentSubscriber';
import { isCachedContentEvent } from '@/lib/stateManagement/eventSubscriber/check/isCachedContentEvent';
import { debounce } from 'throttle-debounce';

export function CodeEditorWrapper() {
	const { updateContent } = useUpdateContent();
	const [selectedFile, setSelectedFile] = useState<CachedContentPayload>();
	const [content, setContent] = useState('');

	useEffect(() => {
		CachedContentSubscriber.create().subscribe('tab_change', (name, value) => {
			if (isCachedContentEvent(value)) {
				setSelectedFile(undefined);

				setTimeout(() => {
					setSelectedFile(value);
					setContent(value.content);
				}, 100);
			}
		});
	}, []);

	const onChange = useCallback(
		debounce(500, (text: string) => {
			if (selectedFile) {
				setContent(text);

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
		}),
		[selectedFile],
	);

	return (
		<>{selectedFile && <CodeEditor value={content} onChange={onChange} />}</>
	);
}
