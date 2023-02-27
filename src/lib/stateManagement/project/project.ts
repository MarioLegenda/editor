import { atom } from 'recoil';
import { Project } from '@/lib/stateManagement/types/project';

export const projectTotalAtom = atom<number | null>({
	key: Project.PROJECT_COUNT,
	default: null,
});
