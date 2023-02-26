import { PropsWithChildren, useEffect } from 'react';
import { useOnAuthStateChange } from '@/lib/dataSource/subscriptions/useOnAuthStateChange';

export function DataSourceEventsProvider({children}: PropsWithChildren) {
	const onAuthStateChange = useOnAuthStateChange();

	useEffect(() => {
		onAuthStateChange();
	}, []);
	return <>{children}</>;
}