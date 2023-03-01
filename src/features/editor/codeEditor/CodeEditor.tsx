import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  language?: string;
  path?: string;
  saveViewState?: boolean;
}

export function CodeEditor({
	language,
	onChange,
	path,
	saveViewState,
	value,
}: Props) {
	const [code, setCode] = useState(value);

	return (
		<>
			<MonacoEditor
				path={path}
				saveViewState={saveViewState}
				defaultLanguage={language || 'javascript'}
				value={code}
				theme='vs-dark'
				onChange={(code) => {
					if (typeof code === 'string') {
						onChange(code);
						setCode(code);
					}
				}}
				onMount={(editor) => {
					editor.focus();
				}}
				options={{
					selectOnLineNumbers: true,
					codeLens: false,
					formatOnPaste: true,
					links: false,
					acceptSuggestionOnEnter: 'off',
					automaticLayout: true,
					snippetSuggestions: 'none',
					copyWithSyntaxHighlighting: false,
					scrollbar: {
						alwaysConsumeMouseWheel: false,
					},
					minimap: {
						enabled: false,
					},
				}}
			/>
		</>
	);
}
