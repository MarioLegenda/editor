import getClient from '@/lib/supabase/client';
import { isProject } from '@/lib/dataSource/projects/check/isProject';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { useCallback, useEffect, useState } from 'react';
import { isFileListing } from '@/lib/dataSource/projects/check/isFileListing';

export function useGetProjectAndFiles(projectId: string | null) {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState<unknown[]>([]);

	const getProject = useCallback(async (): Promise<Project | null> => {
		const { data, error } = await getClient()
			.from('project')
			.select('*')
			.eq('id', projectId);

		if (error) {
			throw new DataSourceError(error.message, {
				code: error.code,
			});
		}

		if (isProject(data[0])) {
			return data[0];
		}

		return null;
	}, []);

	const getFiles = useCallback(async (): Promise<AppFile[]> => {
		const { data, error } = await getClient()
			.from('files')
			.select('*')
			.eq('project_id', projectId)
			.is('deleted_at', null);
		
		if (error) {
			throw new DataSourceError(error.message, {
				code: error.code,
			});
		}

		if (isFileListing(data)) {
			return data;
		}

		return [];
	}, []);

	useEffect(() => {
		const one = new Promise((resolve, reject) => {
			getProject().then((project) => {
				if (project) resolve(project);
			}).catch((e) => reject(e));
		});

		const two = new Promise((resolve, reject) => {
			getFiles().then((project) => {
				if (project) resolve(project);
			}).catch((e) => reject(e));
		});

		Promise.all([one, two]).then((values) => {
			setIsLoading(false);
			if (Array.isArray(values)) {
				setData(values);
			}
		}).catch(() => {
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