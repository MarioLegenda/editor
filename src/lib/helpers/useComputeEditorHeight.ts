import { useEffect } from 'react';
import { editor } from 'monaco-editor';
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;

export function useComputeEditorHeight(
  editor: IStandaloneCodeEditor | undefined,
) {
  useEffect(() => {
    if (editor) {
      const menuElem = document.getElementById('topMenuId');
      const tabsElem = document.getElementById('tabsId');
      const filePathElem = document.getElementById('filePathId');
      const actualEditorElem = document.getElementById('actualEditorId');

      if (menuElem && tabsElem && filePathElem && actualEditorElem) {
        const editorHeight =
          window.innerHeight -
          menuElem.offsetHeight -
          tabsElem.offsetHeight -
          filePathElem.offsetHeight;

        actualEditorElem.setAttribute('style', `height: ${editorHeight}px`);

        window.addEventListener('resize', () => {
          const editorHeight =
            window.innerHeight -
            menuElem.offsetHeight -
            tabsElem.offsetHeight -
            filePathElem.offsetHeight;

          actualEditorElem.setAttribute('style', `height: ${editorHeight}px`);
        });
      }
    }
  }, [editor]);
}
