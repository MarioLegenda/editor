import { useProjectSlug } from '@/lib/helpers/useProjectSlug';
import { useGetProjectAndFiles } from '@/lib/dataSource/projects/useGetProjectAndFiles';
import { useEffect } from 'react';
import { useSetFilesystem, useSetProject } from '@/lib/stateManagement/project/setters';
import { isProject } from '@/lib/dataSource/projects/check/isProject';
import { useQueriesResolver } from '@/lib/helpers/reactQuery/useQueriesResolver';

export function useProjectDataResolver() {
	const projectId = useProjectSlug();
	const {query} = useGetProjectAndFiles(projectId);
	const setProject = useSetProject();
	const setFiles = useSetFilesystem();
	const {isLoading, data, isError} = useQueriesResolver<Project | null | AppFile[]>(query);

	useEffect(() => {
		if (!isLoading && data) {
			for (const q of query) {
				if (isProject(q.data)) {
					setProject(q.data);
				}

				if (Array.isArray(q.data)) {
					setFiles(q.data);
				}
			}
		}
	}, [data, isLoading]);

	return {
		notFound: isError,
		isLoading: isLoading,
	};
}