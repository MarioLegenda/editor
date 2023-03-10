import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { createFile } from '@/lib/dataSource/features/fileSystem/implementation/createFile';

export function useCreateFile(projectId: string) {
	const account = useAccount();

	const mutation = useMutation(async (values: NewFile) => {
		return await createFile(
			values.name,
			values.parent,
			values.isDirectory,
			projectId,
			account().id,
			values.extension,
			values.fileType,
		);
	});

	return {
		mutation,
		createFile: useCallback((values: NewFile) => mutation.mutate(values), []),
	};
}
