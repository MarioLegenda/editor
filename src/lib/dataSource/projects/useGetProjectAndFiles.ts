import { useQueries } from 'react-query';
import getClient from '@/lib/supabase/client';
import { Query } from '@/lib/dataSource/enums/query';
import { isProject } from '@/lib/dataSource/projects/check/isProject';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export function useGetProjectAndFiles(projectId: string | null) {
	const query = useQueries([
		{
			queryKey: Query.GET_PROJECT_DATA,
			queryFn: async (): Promise<Project | null> => {
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
			},
			staleTime: 0,
			retry: 0,
		},
		{
			queryKey: Query.GET_FILESYSTEM,
			queryFn: async (): Promise<AppFile[]> => {
				const { data, error } = await getClient()
					.from('files')
					.select('*')
					.eq('project_id', projectId);

				if (error) {
					throw new DataSourceError(error.message, {
						code: error.code,
					});
				}

				if (Array.isArray(data)) {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					return data as AppFile[];
				}

				return data;
			},
			staleTime: 0,
			retry: 0,
		}
	]);

	return {
		query,
	};
}