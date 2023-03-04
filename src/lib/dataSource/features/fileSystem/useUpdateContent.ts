import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { updateContent } from '@/lib/dataSource/features/fileSystem/implementation/updateContent';

export function useUpdateContent() {
	const account = useAccount();

	const mutation = useMutation(async (values: UpdatedContent) => {
		return await updateContent(
			values.fileId,
			values.projectId,
			account().id,
			values.content,
		);
	});

	return {
		mutation,
		updateContent: useCallback(
			(values: UpdatedContent) => mutation.mutate(values),
			[],
		),
	};
}
