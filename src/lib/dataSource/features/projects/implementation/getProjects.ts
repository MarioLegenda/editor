import getClient from '@/lib/supabase/client';
import { isProjectList } from '@/lib/dataSource/features/projects/check/isProjectList';

export async function getProjects(page: number, initialLimit: number) {
	const { data: projects, error } = await getClient()
		.from('project')
		.select('name,description,id,color,user_id')
		.range(page * initialLimit, (page + 1) * initialLimit - 1)
		.order('created_at', { ascending: false });

	if (error) {
		throw new Error(error.message);
	}

	if (isProjectList(projects)) {
		return projects;
	}

	return [];
}
