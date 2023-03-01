import { useSetRecoilState } from 'recoil';
import { fileSystemAtom, projectAtom, projectTotalAtom, selectedFileAtom } from '@/lib/stateManagement/project/project';

export function useSetTotal() {
	return useSetRecoilState(projectTotalAtom);
}

export function useSetFilesystem() {
	return useSetRecoilState(fileSystemAtom);
}

export function useSetProject() {
	return useSetRecoilState(projectAtom);
}

export function useSetSelectedFile() {
	return useSetRecoilState(selectedFileAtom);
}

export function useAddFile() {
	const setFiles = useSetFilesystem();

	return (file: AppFile) => setFiles((files) => [...files, file]);
}