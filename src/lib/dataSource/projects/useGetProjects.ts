import { useQuery } from 'react-query';
import { useState } from 'react';
import getClient from '@/lib/supabase/client';
import { isProjectList } from '@/lib/dataSource/projects/check/isProjectList';

export function useGetProjects(initialPage = 0, initialLimit = 15) {
	const [page, setPage] = useState(initialPage);
	const [limit, setLimit] = useState(initialLimit);

	const query = useQuery<Project[]>(['projects', page], async (): Promise<Project[]> => {
		const { data: projects, error } = await getClient()
			.from('project')
			.select('*')
			.range(page * limit, limit);

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
	});

	return {
		query,
		pageUp: () => setPage(page => page + 1),
		pageDown: () => setPage(page => page - 1),
		setPage: (page: number) => setPage(page),
		setLimit: (limit: number) => setLimit(limit),
	};
}