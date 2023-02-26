import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';

export function useSignIn() {
	const mutation = useMutation(async (values: LoginUser) => {
		const {data, error} = await getClient().auth.signInWithPassword({
			email: values.email,
			password: values.password,
		});

		if (error) {
			throw new Error('Cannot sign in user');
		}

		return data;
	});

	return {
		mutation,
		signIn: useCallback((values: LoginUser) => mutation.mutate(values), []),
	};
}