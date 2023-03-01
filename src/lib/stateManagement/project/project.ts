import { atom, selectorFamily } from 'recoil';
import { Project as ProjectEnum } from '@/lib/stateManagement/types/project';
import { sortFilesAlphabetically } from '@/lib/stateManagement/sorting/sortFilesAlphabetically';

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

export const selectedFileAtom = atom<File | null>({
	key: ProjectEnum.SELECTED_FILE,
	default: null,
});

export const directoryFilesSelectorFilter = selectorFamily({
	key: ProjectEnum.SINGLE_DIRECTORY_FILES_FILTER,
	get: parentId => ({getCallback}) => {
		return getCallback(({snapshot}) => async () => {
			const files = await snapshot.getPromise(fileSystemAtom);

			return files.filter((item) => item.parent === parentId);
		});
	}
});

export const parentFileStructureSelectorFamily = selectorFamily({
	key: ProjectEnum.DIRECTORY_FILE_STRUCTURE,
	get: parentId => ({get}) => {
		const files = get(fileSystemAtom);

		if (typeof parentId === 'string') {
			return sortFilesAlphabetically(files, parentId);
		}

		return [];
	}
});