import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { useAccount } from '@/lib/stateManagement/auth/getters';
import { updateContent } from '@/lib/dataSource/features/fileSystem/implementation/updateContent';
import { useSetStateIndicator } from '@/lib/stateManagement/global/setters';

export function useUpdateContent() {
  const account = useAccount();
  const setState = useSetStateIndicator();

  const mutation = useMutation(async (values: UpdatedContent) => {
    setState('saving');
    const data = await updateContent(
      values.fileId,
      values.projectId,
      account().id,
      values.content,
    );
    setState('saved');

    return data;
  });

  return {
    mutation,
    updateContent: useCallback(
      (values: UpdatedContent) => mutation.mutate(values),
      [],
    ),
  };
}
