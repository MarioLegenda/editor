import { useQuery } from 'react-query';
import { useState } from 'react';
import getClient from '@/lib/supabase/client';
import { isProjectList } from '@/lib/dataSource/projects/check/isProjectList';
import { Query } from '@/lib/dataSource/enums/query';

export function useGetProjects(initialPage = 0, initialLimit = 15) {
	const [page, setPage] = useState(initialPage);

	const query = useQuery<Project[]>([Query.GET_PAGINATED_PROJECTS, page], async (): Promise<Project[]> => {
		console.log(page, page * initialLimit, (page + 1) * initialLimit - 1);
		const { data: projects, error } = await getClient()
			.from('project')
			.select('name,description,id,color,user_id')
			.range(page * initialLimit, (page + 1) * initialLimit - 1)
			.order('created_at', {ascending: false});

		if (error) {
			throw new Error(error.message);
		}

		if (isProjectList(projects)) {
			return projects;
		}

		return [];
	}, {
		keepPreviousData: true,
		staleTime: 0,
		retry: 3,
		retryDelay: 2000,
	});

	return {
		query,
		setPage: (page: number) => setPage(page),
		currentPage: page + 1,
	};
}