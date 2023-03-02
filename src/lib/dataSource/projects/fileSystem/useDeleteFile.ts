import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export function useDeleteFile(projectId: string, fileId: string) {
	const account = useAccount();

	const mutation = useMutation(async (values: FileToDelete) => {
		const { error } = await getClient()
			.from('files')
			.update({
				deleted_at: 'NOW()',
			})
			.eq('id', fileId)
			.eq('project_id', values.projectId)
			.eq('user_id', account().id);

		if (error) {
			throw new DataSourceError('Cannot delete file.', {
				code: error.code,
			});
		}
	});

	return {
		mutation,
		deleteFile: useCallback((values: FileToDelete) => mutation.mutate(values), []),
	};
}