import { atom } from 'recoil';
import { Project as ProjectEnum } from '@/lib/stateManagement/types/project';

export const projectTotalAtom = atom<number | null>({
	key: ProjectEnum.PROJECT_COUNT,
	default: null,
});

export const fileSystemAtom = atom<File[]>({
	key: ProjectEnum.FILE_SYSTEM,
	default: [],
});

export const projectAtom = atom<Project | null>({
	key: ProjectEnum.PROJECT,
	default: null,
});

