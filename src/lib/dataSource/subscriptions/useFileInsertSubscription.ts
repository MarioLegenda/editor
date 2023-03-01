import { useEffect, useRef } from 'react';
import getClient from '@/lib/supabase/client';
import { RealtimeChannel } from '@supabase/realtime-js';
import { isDevEnvironment } from '@/lib/helpers/isDevEnvironment';
import { useAddFile } from '@/lib/stateManagement/project/setters';
import { isFile } from '@/lib/dataSource/projects/check/isFile';

export function useFileInsertSubscription() {
	const isSubscribedRef = useRef(false);
	const addFile = useAddFile();

	useEffect(() => {
		let subscription: RealtimeChannel;
		if (!isSubscribedRef.current) {
			subscription = getClient().channel('file-insert-channel')
				.on(
					'postgres_changes',
					{ event: 'INSERT', schema: 'public', table: 'files' },
					(payload) => {
						if (isFile(payload.new)) {
							addFile(payload.new);
						}
					}
				).subscribe();

			isSubscribedRef.current = true;
		}

		return () => {
			if (isDevEnvironment()) {
				return;
			}

			if (subscription && isSubscribedRef.current) {
				getClient().removeChannel(subscription);
			}
		};
	}, []);
}