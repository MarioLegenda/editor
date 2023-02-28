import { useSetRecoilState } from 'recoil';
import { fileSystemAtom, projectAtom, projectTotalAtom } from '@/lib/stateManagement/project/project';

export function useSetTotal() {
	return useSetRecoilState(projectTotalAtom);
}

export function useSetFilesystem() {
	return useSetRecoilState(fileSystemAtom);
}

export function useSetProject() {
	return useSetRecoilState(projectAtom);
}