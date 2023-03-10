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

export function useIsChildDirectory() {
	return useRecoilCallback(
		({ snapshot }) =>
			async (parent: string, child: string) => {
				const files = await snapshot.getPromise(fileSystemAtom);
				const project = await snapshot.getPromise(projectAtom);

				if (project) {
					if (parent === child) {
						return true;
					}
					const recursivePath = (
						filesObj: Record<string, AppFile>,
						searchId: string,
					): boolean => {
						const file = filesObj[searchId];

						if (file) {
							if (file.id === parent) {
								return true;
							}

							if (file.parent === project.id) {
								return false;
							}

							return recursivePath(filesObj, file.parent);
						}

						return false;
					};

					const idx = files.findIndex((item) => item.id === child);

					if (idx !== -1) {
						const values = Object.values(files);
						const filesObj: Record<string, AppFile> = {};
						for (const val of values) {
							filesObj[val.id] = val;
						}

						return recursivePath(filesObj, child);
					}

					return false;
				}
			},
		[],
	);
}
