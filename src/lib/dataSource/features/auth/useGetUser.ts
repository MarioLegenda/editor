import { useQuery } from 'react-query';
import getClient from '@/lib/supabase/client';
import { Query } from '@/lib/dataSource/enums/query';

export function useGetUser() {
	return useQuery(
		Query.GET_USER,
		async () => {
			const { data, error } = await getClient().auth.getUser();

			if (error) {
				throw new Error(error.message);
			}

			return data.user;
		},
		{
			staleTime: Infinity,
			retry: false,
		},
	);
}
