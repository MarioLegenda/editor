import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function deleteFile(
	fileId: string,
	projectId: string,
	userId: string,
) {
	const { error } = await getClient()
		.from('files')
		.update({
			deleted_at: new Date().toISOString(),
		})
		.eq('id', fileId)
		.eq('project_id', projectId)
		.eq('user_id', userId);

	if (error) {
		throw new DataSourceError('Cannot delete file.', {
			code: error.code,
		});
	}
}
