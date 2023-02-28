import { useQuery } from 'react-query';
import getClient from '@/lib/supabase/client';
import { Query } from '@/lib/dataSource/enums/query';
import { isProjectWithFiles } from '@/lib/dataSource/projects/check/isProjectWithFiles';

export function useGetProjectData(projectId: string | null) {
	const query = useQuery<ProjectWithFiles | QueryLoader | null>([Query.GET_PROJECT_DATA, projectId], async (): Promise<ProjectWithFiles | QueryLoader | null> => {
		if (!projectId) {
			return {
				isLoading: true,
			};
		}
		
		const { data: project, error } = await getClient()
			.from('project')
			.select(`
     		*,
     		files (name,parent,is_directory,created_at,updated_at)
  		`).eq('id', projectId);

		if (error) {
			throw new Error(error.message);
		}

		if (isProjectWithFiles(project[0])) {
			return project[0];
		}

		return null;
	}, {
		staleTime: 0,
		retry: 0,
	});

	return {
		query,
	};
}