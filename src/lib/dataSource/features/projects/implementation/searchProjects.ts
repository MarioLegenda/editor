import getClient from '@/lib/supabase/client';
import { isSearchProjectList } from '@/lib/dataSource/features/projects/check/isSearchProjectList';

export async function searchProjects(term: string) {
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
}