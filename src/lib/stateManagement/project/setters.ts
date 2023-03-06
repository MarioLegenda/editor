import { useRecoilCallback, useSetRecoilState } from 'recoil';
import {
	fileSystemAtom,
	projectAtom,
	projectTotalAtom,
	rootFileAtom,
} from '@/lib/stateManagement/project/atoms';

export function useSetTotal() {
	return useSetRecoilState(projectTotalAtom);
}

export function useSetFilesystem() {
	return useSetRecoilState(fileSystemAtom);
}

export function useSetProject() {
	return useSetRecoilState(projectAtom);
}

export function useSetRootFile() {
	return useSetRecoilState(rootFileAtom);
}

export function useUpdateFileName() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (name: string, id: string) => {
				const files = await snapshot.getPromise(fileSystemAtom);

				const idx = files.findIndex((item) => item.id === id);

				if (idx !== -1) {
					const temp = [...files];
					const f = { ...temp[idx] };
					f.name = name;
					temp[idx] = f;

					set(fileSystemAtom, [...temp]);
				}
			},
		[],
	);
}
