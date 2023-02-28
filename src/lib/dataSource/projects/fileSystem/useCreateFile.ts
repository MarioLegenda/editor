import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export function useCreateFile(projectId: string) {
	const account = useAccount();

	const mutation = useMutation(async (values: NewFile) => {
		const { error } = await getClient().from('files').insert({
			name: values.name,
			parent: values.parent,
			is_directory: values.isDirectory,
			project_id: projectId,
			user_id: account().id,
			file_extension: values.extension,
			file_type: values.fileType,
		});

		if (error) {
			throw new DataSourceError('Cannot create project.', {
				code: error.code,
			});
		}
	});

	return {
		mutation,
		createFile: useCallback((values: NewFile) => mutation.mutate(values), []),
	};
}