import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { isFileListing } from '@/lib/dataSource/features/fileSystem/check/isFileListing';

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

	if (isFileListing(data)) {
		return data[0].content;
	}

	return '';
}
