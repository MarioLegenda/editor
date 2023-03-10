import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { isFileListing } from '@/lib/dataSource/features/fileSystem/check/isFileListing';

export async function getFiles(projectId: string) {
	const { data, error } = await getClient()
		.from('files')
		.select(
			'id,name,project_id,user_id,parent,is_directory,file_type,file_extension,created_at,updated_at',
		)
		.eq('project_id', projectId)
		.is('deleted_at', null);

	if (error) {
		throw new DataSourceError(error.message, {
			code: error.code,
		});
	}

	if (isFileListing(data)) {
		return data;
	}

	return [];
}
