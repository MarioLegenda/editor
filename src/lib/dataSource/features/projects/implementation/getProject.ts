import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { isProject } from '@/lib/dataSource/features/projects/check/isProject';

export async function getProject(projectId: string) {
  const { data, error } = await getClient()
    .from('project')
    .select('*')
    .eq('id', projectId);

  if (error) {
    throw new DataSourceError(error.message, {
      code: error.code,
    });
  }

  if (isProject(data[0])) {
    return data[0];
  }

  return null;
}
