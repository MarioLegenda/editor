import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';

export function useDeleteProject(id: string, userId: string) {
	const mutation = useMutation(async (values: DeleteProject) => {
		const { data, error } = await getClient()
			.from('project')
			.delete()
			.eq('id', values.id)
			.eq('user_id', values.userId);

		if (error) {
			throw new Error('Cannot create project.');
		}

		return data;
	});

	return {
		mutation,
		deleteProject: useCallback((values: DeleteProject) => mutation.mutate({
			id: values.id,
			userId: userId,
		}), []),
	};
}