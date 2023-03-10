import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function bulkInsertFiles(files: AppFile[]) {
	const { error, data } = await getClient()
		.from('files')
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
		.insert(files)
		.select();

	if (error) {
		throw new DataSourceError('Cannot create file.', {
			code: error.code,
		});
	}

	return data[0];
}
