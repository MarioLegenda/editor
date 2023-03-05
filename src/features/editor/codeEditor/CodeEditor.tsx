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
				theme="vs-dark"
				onChange={(code) => {
					if (typeof code === 'string') {
						onChange(code);
						setCode(code);
					}
				}}
				onMount={(editor, monaco) => {
					editor.focus();
					monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
						noSemanticValidation: true,
						noSyntaxValidation: true,
					});
				}}
				options={{
					selectOnLineNumbers: true,
					codeLens: true,
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
						enabled: true,
					},
				}}
			/>
		</>
	);
}
