import { useQuery } from 'react-query';
import { useState } from 'react';
import { Query } from '@/lib/dataSource/enums/query';
import { getProjects } from '@/lib/dataSource/features/projects/implementation/getProjects';

export function useGetProjects(initialPage = 0, initialLimit = 15) {
	const [page, setPage] = useState(initialPage);

	const query = useQuery<Project[]>(
		[Query.GET_PAGINATED_PROJECTS, page],
		async (): Promise<Project[]> => {
			return await getProjects(page, initialLimit);
		},
		{
			keepPreviousData: true,
			staleTime: 0,
			retry: 3,
			retryDelay: 2000,
		},
	);

	return {
		query,
		setPage: (page: number) => setPage(page),
		currentPage: page + 1,
	};
}
