import { useCallback, useState } from 'react';
import { CodeEditor } from '@/features/editor/codeEditor/CodeEditor';
import { useCodeEditorSelectedFile } from '@/lib/stateManagement/project/getters';
import { useDebounce } from 'use-debounce';

export function CodeEditorWrapper() {
	const [content, setContent] = useState('');
	const selectedFile = useCodeEditorSelectedFile();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [debouncedText, _] = useDebounce(content, 500);

	const onChange = useCallback(() => {
		if (selectedFile) {
			setContent(selectedFile.content);
		}
	}, [selectedFile]);

	return <>
		{selectedFile && <CodeEditor value={debouncedText} onChange={onChange} />}
	</>;
}