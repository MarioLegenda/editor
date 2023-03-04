import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function updateContent(
	fileId: string,
	projectId: string,
	userId: string,
	content: string,
) {
	const { error } = await getClient()
		.from('files')
		.update({
			content: content,
			updated_at: new Date().toISOString(),
		})
		.eq('id', fileId)
		.eq('project_id', projectId)
		.eq('user_id', userId);

	if (error) {
		throw new DataSourceError('Cannot update file.', {
			code: error.code,
		});
	}
}
