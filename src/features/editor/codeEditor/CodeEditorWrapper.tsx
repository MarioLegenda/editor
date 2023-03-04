import { useCallback, useEffect, useState } from 'react';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';
import { useCodeEditorSelectedFile } from '@/lib/stateManagement/project/getters';
import { useDebounce } from 'use-debounce';
import { useUpdateContent } from '@/lib/dataSource/features/fileSystem/useUpdateContent';

interface Props {
  projectId: string;
}

export function CodeEditorWrapper({ projectId }: Props) {
	const selectedFile = useCodeEditorSelectedFile();

	const [content, setContent] = useState('');
	const { updateContent } = useUpdateContent();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [debouncedText, _] = useDebounce(content, 500);

	const onChange = useCallback(
		(text: string) => {
			if (selectedFile) {
				setContent(text);
			}
		},
		[selectedFile],
	);

	useEffect(() => {
		if (selectedFile) {
			updateContent({
				fileId: selectedFile.id,
				projectId: projectId,
				content: debouncedText,
			});
		}
	}, [debouncedText, selectedFile]);

	return (
		<>
			{selectedFile && <CodeEditor value={debouncedText} onChange={onChange} />}
		</>
	);
}
