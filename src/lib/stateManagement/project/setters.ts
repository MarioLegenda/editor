import { useSetRecoilState } from 'recoil';
import { projectTotalAtom } from '@/lib/stateManagement/project/project';

export function useSetTotal() {
	const setTotal = useSetRecoilState(projectTotalAtom);

	return (total: number) => setTotal(total);
}