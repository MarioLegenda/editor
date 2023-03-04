import { useCallback, useEffect, useState } from 'react';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';
import { useDebounce } from 'use-debounce';
import { useUpdateContent } from '@/lib/dataSource/features/fileSystem/useUpdateContent';
import { CachedContentSubscriber } from '@/lib/stateManagement/eventSubscriber/CachedContentSubscriber';
import { isCachedContentEvent } from '@/lib/stateManagement/eventSubscriber/check/isCachedContentEvent';

export function CodeEditorWrapper() {
	const { updateContent } = useUpdateContent();
	const [selectedFile, setSelectedFile] = useState<CachedContentPayload>();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [debouncedText, setContent] = useDebounce('', 500);

	useEffect(() => {
		CachedContentSubscriber.create().subscribe('tab_change', (name, value) => {
			if (isCachedContentEvent(value)) {
				setContent(value.content);
				setSelectedFile(value);
			}
		});
	}, []);

	useEffect(() => {
		if (selectedFile) {
			updateContent({
				fileId: selectedFile.id,
				projectId: selectedFile.projectId,
				content: debouncedText,
			});

			CachedContentSubscriber.create().updateCache(
				selectedFile.id,
				debouncedText,
			);
		}
	}, [debouncedText, selectedFile]);

	const onChange = useCallback(
		(text: string) => {
			if (selectedFile) {
				setContent(text);
			}
		},
		[selectedFile],
	);

	return (
		<>
			{selectedFile && <CodeEditor value={debouncedText} onChange={onChange} />}
		</>
	);
}
