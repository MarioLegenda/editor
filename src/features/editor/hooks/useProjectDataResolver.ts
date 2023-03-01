import { useProjectSlug } from '@/lib/helpers/useProjectSlug';
import { useGetProjectAndFiles } from '@/lib/dataSource/projects/useGetProjectAndFiles';
import { useEffect, useState } from 'react';
import { useSetFilesystem, useSetProject } from '@/lib/stateManagement/project/setters';

export function useProjectDataResolver() {
	const projectId = useProjectSlug();
	const {query: [project, files]} = useGetProjectAndFiles(projectId);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const setProject = useSetProject();
	const setFiles = useSetFilesystem();

	useEffect(() => {
		if (
			!project.isLoading &&
			!files.isLoading &&
			project.isSuccess &&
			files.isSuccess &&
			project.data &&
			files.data
		) {
			setIsLoading(false);
		}
	}, [
		project.isLoading,
		files.isLoading,
		project.isSuccess,
		files.isSuccess,
		project.data,
		files.data,
	]);

	useEffect(() => {
		if (!isLoading) {
			if (project.isError || files.isError) {
				setIsLoading(false);
				setIsError(true);

				return;
			}

			if (project.data) {
				setProject(project.data);
			}

			if (files.data) {
				setFiles(files.data);
			}
		}
	}, [isLoading]);

	return {
		notFound: isError,
		isLoading: isLoading,
	};
}