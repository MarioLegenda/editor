import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function editProject(
  projectId: string,
  values: EditProject & { userId: string },
) {
  const { error } = await getClient()
    .from('project')
    .update({ name: values.name, description: values.description })
    .eq('id', projectId)
    .eq('user_id', values.userId);

  if (error) {
    throw new DataSourceError('Cannot create project.', {
      code: error.code,
    });
  }

  return {
    name: values.name,
    description: values.description,
  };
}
