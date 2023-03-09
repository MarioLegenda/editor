import { useRecoilCallback, useSetRecoilState } from 'recoil';
import {
	copyBufferAtom,
	cutBufferAtom,
} from '@/lib/stateManagement/clipboard/atoms';
import {
	useGetFilePath,
	useProject,
} from '@/lib/stateManagement/project/getters';

const MAX_ITEMS = 10;

async function resolvePath(
	fn: ReturnType<typeof useGetFilePath>,
	item: string,
	projectId: string,
	projectName: string,
) {
	const paths = await fn(item, projectId);
	return `/${projectName}/${paths.map((item) => item.name).join('/')}`;
}

function resolveBuffer(
	buffer: ClipboardBufferItem[],
	path: string,
	item: string,
) {
	const temp = [...buffer];

	if (temp.length === MAX_ITEMS) {
		temp.shift();
	}

	return [{ date: new Date(), item: path, id: item }, ...temp];
}

export function useResetCutBuffer() {
	const setCutBuffer = useSetRecoilState(cutBufferAtom);

	return () => setCutBuffer([]);
}

export function useResetCopyBuffer() {
	const setCopyBuffer = useSetRecoilState(copyBufferAtom);

	return () => setCopyBuffer([]);
}

export function useAddCopyItem() {
	const setBuffer = useSetRecoilState(copyBufferAtom);
	const project = useProject();
	const getFilePath = useGetFilePath();

	return async (item: string) => {
		const path = await resolvePath(getFilePath, item, project.id, project.name);
		setBuffer((buffer) => resolveBuffer([...buffer], path, item));
	};
}

export function useAddCutItem() {
	const setBuffer = useSetRecoilState(cutBufferAtom);
	const project = useProject();
	const getFilePath = useGetFilePath();

	return async (item: string) => {
		const path = await resolvePath(getFilePath, item, project.id, project.name);
		setBuffer((buffer) => resolveBuffer([...buffer], path, item));
	};
}

export function useRemoveBufferItem() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			async (type: 'cut' | 'copy', item: string) => {
				let items: ClipboardBufferItem[] = [];
				if (type === 'cut') {
					items = await snapshot.getPromise(cutBufferAtom);
				} else if (type === 'copy') {
					items = await snapshot.getPromise(copyBufferAtom);
				}

				const idx = items.findIndex((thing) => thing.id === item);
				if (idx !== -1) {
					const temp = [...items];
					temp.splice(idx, 1);
					if (type === 'cut') {
						set(cutBufferAtom, temp);
					} else if (type === 'copy') {
						set(copyBufferAtom, temp);
					}
				}
			},
		[],
	);
}
