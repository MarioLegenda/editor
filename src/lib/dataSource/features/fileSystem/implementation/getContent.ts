import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function getContent(
  fileId: string,
  projectId: string,
  userId: string,
) {
  const { data, error } = await getClient()
    .from('files')
    .select('content')
    .eq('project_id', projectId)
    .eq('id', fileId)
    .eq('user_id', userId);

  if (error) {
    throw new DataSourceError(error.message, {
      code: error.code,
    });
  }

  if (Array.isArray(data)) {
    return data[0].content;
  }

  return '';
}
