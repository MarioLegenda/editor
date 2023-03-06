import { useRecoilCallback, useRecoilValue } from 'recoil';
import { useCallback } from 'react';
import {
	fileSystemAtom,
	parentFileStructureSelectorFamily,
	projectAtom,
	projectTotalAtom,
	rootFileAtom,
} from '@/lib/stateManagement/project/atoms';

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

export function useRootFile() {
	return useRecoilValue(rootFileAtom) as string;
}

export function useParentFiles(parentId: string) {
	return useRecoilValue(parentFileStructureSelectorFamily(parentId));
}

export function useGetFilePath() {
	return useRecoilCallback(
		({ snapshot }) =>
			async (id: string, projectId: string) => {
				const files = await snapshot.getPromise(fileSystemAtom);
				const paths: Path[] = [];

				const recursivePath = (
					filesObj: Record<string, AppFile>,
					searchId: string,
				) => {
					const file = filesObj[searchId];

					if (file) {
						if (file.parent !== projectId) {
							paths.push({
								name: file.name,
								fileType: file.file_type,
								isDirectory: file.is_directory,
							});

							recursivePath(filesObj, file.parent);
						}
					}
				};

				const idx = files.findIndex((item) => item.id === id);

				if (idx !== -1) {
					const values = Object.values(files);
					const filesObj: Record<string, AppFile> = {};
					for (const val of values) {
						filesObj[val.id] = val;
					}

					recursivePath(filesObj, id);
					paths.reverse();

					return paths;
				}

				return [];
			},
		[],
	);
}
