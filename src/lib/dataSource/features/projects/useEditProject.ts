import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { editProject } from '@/lib/dataSource/features/projects/implementation/editProject';

export function useEditProject(id: string) {
	const account = useAccount();

	const mutation = useMutation(
		async (values: EditProject & { userId: string }) => {
			return await editProject(id, values);
		},
	);

	return {
		mutation,
		editProject: useCallback(
			(values: EditProject) =>
				mutation.mutate({
					...values,
					userId: account().id,
				}),
			[],
		),
	};
}
