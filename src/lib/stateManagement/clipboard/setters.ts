import { useSetRecoilState } from 'recoil';
import {
	copyBufferAtom,
	cutBufferAtom,
} from '@/lib/stateManagement/clipboard/atoms';
import {
	useGetFilePath,
	useProject,
} from '@/lib/stateManagement/project/getters';

async function resolvePath(
	fn: ReturnType<typeof useGetFilePath>,
	item: string,
	projectId: string,
	projectName: string,
) {
	const paths = await fn(item, projectId);
	const path = `/${projectName}/${paths.map((item) => item.name).join('/')}`;

	return path;
}

export function useAddCopyItem() {
	const setBuffer = useSetRecoilState(copyBufferAtom);
	const project = useProject();
	const getFilePath = useGetFilePath();

	return async (item: string) => {
		const path = await resolvePath(getFilePath, item, project.id, project.name);

		setBuffer((buffer) => [
			...buffer,
			{ date: new Date(), item: path, id: item },
		]);
	};
}

export function useAddCutItem() {
	const setBuffer = useSetRecoilState(cutBufferAtom);
	const project = useProject();
	const getFilePath = useGetFilePath();

	return async (item: string) => {
		const path = await resolvePath(getFilePath, item, project.id, project.name);

		setBuffer((buffer) => [
			...buffer,
			{ date: new Date(), item: path, id: item },
		]);
	};
}
