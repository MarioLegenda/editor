import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { useQuery } from 'react-query';

export function useGetTotal() {
	return useQuery('projectTotal', async () => {
		const {data, error} = await getClient().rpc('total_projects');

		if (error) {
			throw new DataSourceError('Cannot fetch total number of projects', {
				code: error.code,
			});
		}

		return data || 0;
	});
}