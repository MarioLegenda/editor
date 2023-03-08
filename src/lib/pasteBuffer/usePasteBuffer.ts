import { pasteBuffer } from '@/lib/pasteBuffer/PasteBuffer';
import {
	useGetFilePath,
	useProject,
} from '@/lib/stateManagement/project/getters';

export function usePasteBuffer() {
	const getFilePath = useGetFilePath();
	const project = useProject();

	return {
		cut: async (item: string) => {
			const paths = await getFilePath(item, project.id);
			const path = `/${project.name}/${paths
				.map((item) => item.name)
				.join('/')}`;

			pasteBuffer.addCut(path);
		},

		copy: async (item: string) => {
			const paths = await getFilePath(item, project.id);
			const path = `/${project.name}/${paths
				.map((item) => item.name)
				.join('/')}`;

			pasteBuffer.addCopy(path);
		},

		getCopyPaths: (): string[] => {
			return pasteBuffer.getCopyBuffer();
		},

		getCutPaths: (): string[] => {
			return pasteBuffer.getCutBuffer();
		},

		isEmpty() {
			return pasteBuffer.copyLength() === 0 && pasteBuffer.cutLength() === 0;
		},
	};
}
