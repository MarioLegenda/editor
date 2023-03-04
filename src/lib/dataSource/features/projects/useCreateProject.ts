import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { createProject } from '@/lib/dataSource/features/projects/implementation/createProject';

export function useCreateProject() {
	const mutation = useMutation(async (values: NewProject) => {
		return await createProject(values);
	});

	return {
		mutation,
		createProject: useCallback(
			(values: NewProject) =>
				mutation.mutate({
					...values,
				}),
			[],
		),
	};
}
