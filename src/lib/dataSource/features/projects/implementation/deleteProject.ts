import getClient from '@/lib/supabase/client';

export async function deleteProject(values: DeleteProject) {
  const { data, error } = await getClient()
    .from('project')
    .delete()
    .eq('id', values.id)
    .eq('user_id', values.userId);

  if (error) {
    throw new Error('Cannot delete project.');
  }

  return data;
}
