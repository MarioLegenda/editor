import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import randomColor from 'randomcolor';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { Query } from '@/lib/dataSource/enums/query';

export function useCreateProject() {
	const account = useAccount();

	const mutation = useMutation(async (values: NewProject & {userId: string}) => {
		const { data, error } = await getClient().rpc(Query.CREATE_PROJECT, {
			name: values.name,
			description: values.description,
			color: randomColor(),
		});

		if (error) {
			throw new DataSourceError('Cannot create project.', {
				code: error.code,
			});
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