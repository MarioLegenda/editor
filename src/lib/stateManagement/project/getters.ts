import { useRecoilValue } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import {
	directoryFilesSelectorFilter,
	fileSystemAtom,
	projectAtom,
	projectTotalAtom
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

export function useDirectoryFiles(parentId: string) {
	const [files, setFiles] = useState<File[] | null>(null);
	const getFiles = useRecoilValue(directoryFilesSelectorFilter(parentId));

	useEffect(() => {
		getFiles().then((files) => {
			setFiles(files);
		});
	}, []);

	return files;
}

