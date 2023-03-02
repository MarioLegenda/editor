import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { deleteDirectory } from '@/lib/dataSource/features/fileSystem/implementation/deleteDirectory';
import { deleteFile } from '@/lib/dataSource/features/fileSystem/implementation/deleteFile';

export function useDeleteFile(fileId: string, isDirectory: boolean) {
	const account = useAccount();

	const mutation = useMutation(async (values: FileToDelete) => {
		if (isDirectory) {
			await deleteDirectory(fileId, values.projectId);

			return;
		}

		await deleteFile(fileId, values.projectId, account().id);
	});

	return {
		mutation,
		deleteFile: useCallback((values: FileToDelete) => mutation.mutate(values), []),
	};
}