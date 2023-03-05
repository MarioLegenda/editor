import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';

export function useSignUp() {
	const mutation = useMutation(async (values: NewUser) => {
		const { data, error } = await getClient().auth.signUp({
			email: values.email,
			password: values.password,
			options: {
				emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_HOST}/sign-in`,
				data: {
					name: values.name,
					lastName: values.lastName,
				},
			},
		});

		if (error) {
			throw new Error('Cannot create user');
		}

		return data;
	});

	return {
		mutation,
		signUp: useCallback((values: NewUser) => mutation.mutate(values), []),
	};
}
