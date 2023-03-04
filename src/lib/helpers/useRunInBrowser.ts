import { useIsBrowser } from '@/lib/helpers/useIsBrowser';
import { useEffect, useState } from 'react';

export function useRunInBrowser() {
	const isInBrowser = useIsBrowser();
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if (isInBrowser) {
			setIsReady(true);
		}
	}, []);

	return isReady;
}
