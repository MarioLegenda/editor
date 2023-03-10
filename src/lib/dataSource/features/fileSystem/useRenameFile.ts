import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { renameFile } from '@/lib/dataSource/features/fileSystem/implementation/renameFile';

export function useRenameFile(projectId: string) {
	const account = useAccount();

	const mutation = useMutation(async (values: RenameFile) => {
		return renameFile(values.id, projectId, account().id, values.name);
	});

	return {
		mutation,
		renameFile: useCallback(
			(values: RenameFile) => mutation.mutate(values),
			[],
		),
	};
}
