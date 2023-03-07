import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;
import { useComputeEditorHeight } from '@/lib/helpers/useComputeEditorHeight';

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
	const [editor, setEditor] = useState<IStandaloneCodeEditor>();
	useComputeEditorHeight(editor);

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

					setEditor(editor);
				}}
				options={{
					selectOnLineNumbers: true,
					codeLens: true,
					formatOnPaste: true,
					links: false,
					acceptSuggestionOnEnter: 'off',
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
