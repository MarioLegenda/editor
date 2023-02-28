import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import { fileSystemAtom, projectAtom, projectTotalAtom } from '@/lib/stateManagement/project/project';

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

