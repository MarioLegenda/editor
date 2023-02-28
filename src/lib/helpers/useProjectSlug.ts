import { useRunInBrowser } from '@/lib/helpers/useRunInBrowser';
import { useEffect, useState } from 'react';

export function useProjectSlug(): string | null {
	const [projectId, setProjectId] = useState<string | null>(null);
	const isInBrowser = useRunInBrowser();

	useEffect(() => {
		const match = location.pathname.match(new RegExp('/editor/(.*)'));
		if (match) {
			setProjectId(match[1]);
		}
	}, [isInBrowser]);

	return projectId;
}