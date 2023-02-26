import getClient from '@/lib/supabase/client';
import { useIsBrowser } from '@/lib/helpers/useIsBrowser';
import { isDevEnvironment } from '@/lib/helpers/isDevEnvironment';

export function useOnAuthStateChange() {
	const isInBrowser = useIsBrowser();

	return () => {
		if (isInBrowser) {
			if (isDevEnvironment()) {
				console.debug('Subscribed: onAuthStateChange');
			}

			getClient().auth.onAuthStateChange((event, session) => {
				if (isDevEnvironment()) {
					console.debug(`Subscription: onAuthStateChange; Event: ${event}`);
				}

				if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
					const expires = new Date(0).toUTCString();
					document.cookie = `app-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
					document.cookie = `app-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
				} else if (session && (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED')) {
					const maxAge = 100 * 365 * 24 * 60 * 60; // 100 years, never expires
					document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
					document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
				}
			});
		}
	};
}