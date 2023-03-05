import { useMutation } from 'react-query';
import { useCallback } from 'react';
import { deleteProject } from '@/lib/dataSource/features/projects/implementation/deleteProject';

export function useDeleteProject(id: string, userId: string) {
  const mutation = useMutation(async (values: DeleteProject) => {
    return await deleteProject(values);
  });

  return {
    mutation,
    deleteProject: useCallback(
      (values: DeleteProject) =>
        mutation.mutate({
          id: values.id,
          userId: userId,
        }),
      [],
    ),
  };
}
