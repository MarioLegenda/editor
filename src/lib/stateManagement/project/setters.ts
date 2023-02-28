import { useSetRecoilState } from 'recoil';
import { projectTotalAtom } from '@/lib/stateManagement/project/project';

export function useSetTotal() {
	return useSetRecoilState(projectTotalAtom);
}