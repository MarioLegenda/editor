import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export function useEditProject(id: string) {
	const account = useAccount();

	const mutation = useMutation(async (values: EditProject & {userId: string}) => {
		const { error } = await getClient()
			.from('project')
			.update({ name: values.name, description: values.description })
			.eq('id', id)
			.eq('user_id', values.userId);

		if (error) {
			throw new DataSourceError('Cannot create project.', {
				code: error.code,
			});
		}

		return {
			name: values.name,
			description: values.description,
		};
	});

	return {
		mutation,
		editProject: useCallback((values: EditProject) => mutation.mutate({
			...values,
			userId: account().id,
		}), []),
	};
}