import { useQuery } from 'react-query';
import { Query } from '@/lib/dataSource/enums/query';
import { getTotalProjects } from '@/lib/dataSource/features/projects/implementation/getTotalProjects';

export function useGetTotal() {
	return useQuery(Query.GET_PROJECTS_TOTAL_QUERY, async () => {
		return await getTotalProjects();
	});
}