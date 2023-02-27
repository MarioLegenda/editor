import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export function useSignIn() {
	const mutation = useMutation(async (values: LoginUser) => {
		const {data, error} = await getClient().auth.signInWithPassword({
			email: values.email,
			password: values.password,
		});

		if (error) {
			console.log(error.name, error.status);
			throw new DataSourceError('Cannot sign in user',  {
				code: error.name,
				status: error.status,
			});
		}

		return data;
	});

	return {
		mutation,
		signIn: useCallback((values: LoginUser) => mutation.mutate(values), []),
	};
}