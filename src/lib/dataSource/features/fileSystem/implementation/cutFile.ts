import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function cutFile(
	fileId: string,
	parent: string,
	projectId: string,
	userId: string,
) {
	const { error, data } = await getClient()
		.from('files')
		.update({
			parent: parent,
			updated_at: new Date().toISOString(),
		})
		.eq('id', fileId)
		.eq('project_id', projectId)
		.eq('user_id', userId)
		.select();

	if (error) {
		throw new DataSourceError('Cannot cut file.', {
			code: error.code,
		});
	}

	return data[0];
}
