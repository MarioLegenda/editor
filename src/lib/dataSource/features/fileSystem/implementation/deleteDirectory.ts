import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function deleteDirectory(id: string, projectId: string) {
  const { error } = await getClient().rpc('mark_children_deleted', {
    parent_id: id,
    current_project_id: projectId,
  });

  if (error) {
    throw new DataSourceError('Cannot delete file.', {
      code: error.code,
    });
  }
}
