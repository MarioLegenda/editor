import { useCallback, useEffect, useState } from 'react';
import { getProject } from '@/lib/dataSource/features/projects/implementation/getProject';
import { getFiles } from '@/lib/dataSource/features/projects/implementation/getFiles';
import { getHistory } from '@/lib/dataSource/features/tabs/implementation/getHistory';

export function useGetProjectAndFiles(projectId: string | null) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<unknown[]>([]);

	const getProjectFn = useCallback(async (): Promise<Project | null> => {
		if (projectId) {
			return await getProject(projectId);
		}

		return null;
	}, []);

	const getHistoryFn = useCallback(async (): Promise<TabsHistory | null> => {
		if (projectId) {
			return (await getHistory(projectId)) as TabsHistory;
		}

		return null;
	}, []);

	const getFilesFn = useCallback(async (): Promise<AppFile[]> => {
		if (projectId) {
			return await getFiles(projectId);
		}

		return [];
	}, []);

	useEffect(() => {
		const one = new Promise((resolve, reject) => {
			getProjectFn()
				.then((item) => resolve(item))
				.catch((e) => reject(e));
		});

		const two = new Promise((resolve, reject) => {
			getFilesFn()
				.then((item) => resolve(item))
				.catch((e) => reject(e));
		});

		const three = new Promise((resolve, reject) => {
			getHistoryFn()
				.then((item) => resolve(item))
				.catch((e) => reject(e));
		});

		Promise.all([one, two, three])
			.then((values) => {
				setIsLoading(false);
				if (Array.isArray(values)) {
					setData(values);
				}
			})
			.catch(() => {
				setIsError(true);
				setIsLoading(false);
			});
	}, []);

	return {
		isLoading,
		isError,
		data,
	};
}
