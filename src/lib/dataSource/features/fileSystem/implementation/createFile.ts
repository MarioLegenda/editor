import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function createFile(
	name: string,
	parent: string,
	isDirectory: boolean,
	projectId: string,
	userId: string,
	extension: ExtensionType[] | null,
	fileType: FileType | null,
) {
	const { error, data } = await getClient()
		.from('files')
		.insert({
			name: name,
			parent: parent,
			is_directory: isDirectory,
			project_id: projectId,
			user_id: userId,
			file_extension: extension,
			file_type: fileType,
		})
		.select();

	if (error) {
		throw new DataSourceError('Cannot create file.', {
			code: error.code,
		});
	}

	return data[0];
}
