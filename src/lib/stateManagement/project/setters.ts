import { useSetRecoilState } from 'recoil';
import {
	fileSystemAtom,
	projectAtom,
	projectTotalAtom,
	rootFileAtom,
	codeEditorSelectedFileSignalAtom,
} from '@/lib/stateManagement/project/project';

export function useSetTotal() {
	return useSetRecoilState(projectTotalAtom);
}

export function useSetFilesystem() {
	return useSetRecoilState(fileSystemAtom);
}

export function useSetProject() {
	return useSetRecoilState(projectAtom);
}

export function useSetCodeEditorSelectedFile() {
	return useSetRecoilState(codeEditorSelectedFileSignalAtom);
}

export function useSetRootFile() {
	return useSetRecoilState(rootFileAtom);
}
