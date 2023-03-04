import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import {
	fileSystemAtom,
	parentFileStructureSelectorFamily,
	projectAtom,
	projectTotalAtom,
	rootFileAtom,
	codeEditorSelectedFileSignalAtom,
} from '@/lib/stateManagement/project/project';

export function useTotal() {
	const total = useRecoilValue(projectTotalAtom);

	return useCallback(() => total, [total]);
}

export function useProject() {
	return useRecoilValue(projectAtom) as Project;
}

export function useFilesystem() {
	return useRecoilValue(fileSystemAtom);
}

export function useCodeEditorSelectedFile() {
	return useRecoilValue(codeEditorSelectedFileSignalAtom);
}

export function useRootFile() {
	return useRecoilValue(rootFileAtom) as string;
}

export function useParentFiles(parentId: string) {
	return useRecoilValue(parentFileStructureSelectorFamily(parentId));
}
