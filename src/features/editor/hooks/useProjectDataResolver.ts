import { useProjectSlug } from '@/lib/helpers/useProjectSlug';
import { useEffect, useState } from 'react';
import { useGetProjectData } from '@/lib/dataSource/projects/useGetProjectData';
import { isProject } from '@/lib/dataSource/projects/check/isProject';

export function useProjectDataResolver() {
	const projectId = useProjectSlug();
	const [isInternalLoading, setIsInternalLoading] = useState(true);
	const {query: {isLoading, data}} = useGetProjectData(projectId);

	useEffect(() => {
		setIsInternalLoading(Boolean(isLoading || (data && !isProject(data) && data.isLoading)));
	}, [isLoading, data]);

	const notFound = !isInternalLoading && !data;

	return {
		notFound: notFound,
		isLoading: isInternalLoading,
		data: data,
	};
}