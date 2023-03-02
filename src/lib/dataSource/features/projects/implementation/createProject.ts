import getClient from '@/lib/supabase/client';
import { Query } from '@/lib/dataSource/enums/query';
import randomColor from 'randomcolor';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';

export async function createProject(values: NewProject) {
	const { data, error } = await getClient().rpc(Query.CREATE_PROJECT, {
		name: values.name,
		description: values.description,
		color: randomColor(),
	});

	if (error) {
		throw new DataSourceError('Cannot create project.', {
			code: error.code,
		});
	}

	if (Array.isArray(data)) {
		return data[0];
	}

	return null;
}