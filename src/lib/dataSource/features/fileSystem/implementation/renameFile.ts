import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function renameFile(
  fileId: string,
  projectId: string,
  userId: string,
  newName: string,
) {
  const { error, data } = await getClient()
    .from('files')
    .update({
      name: newName,
      updated_at: new Date().toISOString(),
    })
    .eq('id', fileId)
    .eq('project_id', projectId)
    .eq('user_id', userId)
    .select();

  if (error) {
    throw new DataSourceError('Cannot update file.', {
      code: error.code,
    });
  }

  return data[0];
}
