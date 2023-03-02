import { useQuery } from 'react-query';
import { useState } from 'react';
import getClient from '@/lib/supabase/client';
import { isSearchProjectList } from '@/lib/dataSource/features/projects/check/isSearchProjectList';
import { Query } from '@/lib/dataSource/enums/query';

export function useSearchProjects(term: string) {
	const [internalTerm, setTerm] = useState(term);

	const query = useQuery<Project[]>([Query.SEARCH_PROJECTS, internalTerm], async (values): Promise<Project[]> => {
		const term = values.queryKey[1];
		if (!term) {
			return [];
		}

		const { data: projects, error } = await getClient()
			.from('project')
			.select('id,name,user_id,description,color')
			.like('name', `%${term}%`)
			.order('created_at', {ascending: true})
			.range(0, 10);

		if (error) {
			throw new Error(error.message);
		}

		if (isSearchProjectList(projects)) {
			return projects;
		}

		return [];
	}, {
		staleTime: 0,
	});

	return {
		query,
		updateTerm: (term: string) => setTerm(term),
	};
}