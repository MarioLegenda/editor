import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function updateHistory(
  projectId: string,
  userId: string,
  history: string,
) {
  const { error, data } = await getClient()
    .from('tabs_history')
    .update({
      history: history,
      updated_at: new Date().toISOString(),
    })
    .eq('project_id', projectId)
    .eq('user_id', userId)
    .select();

  if (error) {
    throw new DataSourceError('Cannot update tab history.', {
      code: error.code,
    });
  }

  return data[0];
}
