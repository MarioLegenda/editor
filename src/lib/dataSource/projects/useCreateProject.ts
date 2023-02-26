import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import randomColor from 'randomcolor';

export function useCreateProject() {
	const account = useAccount();

	const mutation = useMutation(async (values: NewProject & {userId: string}) => {
		const { data, error } = await getClient()
			.from('project')
			.insert([
				{ name: values.name, description: values.description, user_id: values.userId, color: randomColor() },
			]);

		if (error) {
			throw new Error('Cannot create project.');
		}

		return data;
	});

	return {
		mutation,
		createProject: useCallback((values: NewProject) => mutation.mutate({
			...values,
			userId: account().id,
		}), []),
	};
}