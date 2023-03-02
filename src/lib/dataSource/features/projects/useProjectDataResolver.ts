import { useProjectSlug } from '@/lib/helpers/useProjectSlug';
import { useGetProjectAndFiles } from '@/lib/dataSource/features/projects/useGetProjectAndFiles';
import { useEffect } from 'react';
import { useSetFilesystem, useSetProject } from '@/lib/stateManagement/project/setters';
import { isProject } from '@/lib/dataSource/features/projects/check/isProject';

export function useProjectDataResolver() {
	const projectId = useProjectSlug();
	const { isLoading, data, isError } = useGetProjectAndFiles(projectId);
	const setProject = useSetProject();
	const setFiles = useSetFilesystem();

	useEffect(() => {
		if (!isLoading && data) {
			for (const q of data) {
				if (isProject(q)) {
					setProject(q);
				}

				if (Array.isArray(q)) {
					setFiles(q);
				}
			}
		}
	}, [data, isLoading]);

	return {
		notFound: isError,
		isLoading: isLoading,
	};
}