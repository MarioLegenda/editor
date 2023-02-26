import { useQuery } from 'react-query';
import getClient from '@/lib/supabase/client';

export function useGetUser() {
	return useQuery('user', async () => {
		const {data, error} = await getClient().auth.getUser();

		if (error) {
			throw new Error(error.message);
		}

		return data.user;
	}, {
		staleTime: Infinity,
	});
}