import { useRecoilValue } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import {
	addedFileAtom,
	directoryFilesSelectorFilter,
	fileSystemAtom, parentFileStructureSelectorFamily,
	projectAtom,
	projectTotalAtom, rootFileAtom, selectedFileSignalAtom
} from '@/lib/stateManagement/project/project';

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

export function useSelectedFileSignal() {
	return useRecoilValue(selectedFileSignalAtom);
}

export function useRootFile() {
	return useRecoilValue(rootFileAtom) as string;
}

export function useAddedFile() {
	return useRecoilValue(addedFileAtom) as AppFile;
}

export function useOneTimeDirectoryFiles(parentId: string) {
	const [files, setFiles] = useState<AppFile[]>([]);
	const getFiles = useRecoilValue(directoryFilesSelectorFilter(parentId));

	useEffect(() => {
		getFiles().then((files) => {
			const directories = files.filter((item) => item.is_directory);
			directories.sort((a, b) => {
				if(a.name < b.name) { return -1; }
				if(a.name > b.name) { return 1; }
				return 0;
			});

			const fs = files.filter((item) => !item.is_directory);
			fs.sort((a, b) => {
				if(a.name < b.name) { return -1; }
				if(a.name > b.name) { return 1; }
				return 0;
			});

			setFiles([...directories, ...fs]);
		});
	}, []);

	return files;
}

export function useParentFiles(parentId: string) {
	return useRecoilValue(parentFileStructureSelectorFamily(parentId));
}

