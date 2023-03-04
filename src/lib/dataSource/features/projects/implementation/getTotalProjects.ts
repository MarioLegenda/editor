import { Query } from '@/lib/dataSource/enums/query';
import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function getTotalProjects() {
	const { data, error } = await getClient().rpc(
		Query.GET_PROJECTS_TOTAL_FUNCTION,
	);

	if (error) {
		throw new DataSourceError('Cannot fetch total number of projects', {
			code: error.code,
		});
	}

	return data || 0;
}
