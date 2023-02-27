import { useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import { projectTotalAtom } from '@/lib/stateManagement/project/project';

export function useTotal() {
	const total = useRecoilValue(projectTotalAtom);

	return useCallback(() => total, [total]);
}
