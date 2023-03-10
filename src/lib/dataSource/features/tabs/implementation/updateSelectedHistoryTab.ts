import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function updateSelectedHistoryTab(
  projectId: string,
  userId: string,
  tab: string,
) {
  const { error, data } = await getClient()
    .from('tabs_history')
    .update({
      selected: tab,
      updated_at: new Date().toISOString(),
    })
    .eq('project_id', projectId)
    .eq('user_id', userId)
    .select();

  if (error) {
    throw new DataSourceError('Cannot update selected tab.', {
      code: error.code,
    });
  }

  return data[0];
}
