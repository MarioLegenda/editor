import getClient from '@/lib/supabase/client';
import { DataSourceError } from '@/lib/dataSource/error/DataSourceError';
import { isTabHistory } from '@/lib/dataSource/features/tabs/check/isTabHistory';
import { isRawHistory } from '@/lib/dataSource/features/tabs/check/isRawHistory';

export async function getHistory(projectId: string) {
	const { data, error } = await getClient()
		.from('tabs_history')
		.select('*')
		.eq('project_id', projectId);

	if (error) {
		throw new DataSourceError(error.message, {
			code: error.code,
		});
	}

	const potentialHistory = data[0];

	if (isTabHistory(potentialHistory)) {
		return potentialHistory;
	}

	if (
		isRawHistory(potentialHistory) &&
    typeof potentialHistory.history === 'string' &&
    typeof potentialHistory.selected === 'string'
	) {
		return {
			id: potentialHistory.id,
			projectId: potentialHistory.project_id,
			selected: JSON.parse(potentialHistory.selected) as Tab,
			history: JSON.parse(potentialHistory.history) as Tab[],
		};
	}

	return null;
}
