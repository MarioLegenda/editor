import { useSetRecoilState } from 'recoil';
import {
	addedFileAtom,
	fileSystemAtom,
	projectAtom,
	projectTotalAtom,
	rootFileAtom,
	selectedFileSignalAtom
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

export function useSetSelectedFileSignal() {
	return useSetRecoilState(selectedFileSignalAtom);
}

export function useSetRootFile() {
	return useSetRecoilState(rootFileAtom);
}

export function useSetAddedFile() {
	return useSetRecoilState(addedFileAtom);
}

export function useAddFile() {
	const setFiles = useSetFilesystem();

	return (file: AppFile) => setFiles((files) => [...files, file]);
}