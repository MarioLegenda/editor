import getClient from '@/lib/supabase/client';
import { useIsBrowser } from '@/lib/helpers/useIsBrowser';
import { isDevEnvironment } from '@/lib/helpers/isDevEnvironment';
import {
	useResetAccount,
	useSetAccount,
	useSetAuthState,
} from '@/lib/stateManagement/auth/setters';
import { useCallback } from 'react';
import { AuthState } from '@/lib/stateManagement/types/authState';

export function useOnAuthStateChange() {
	const isInBrowser = useIsBrowser();
	const setAccount = useSetAccount();
	const resetAccount = useResetAccount();
	const setAuthState = useSetAuthState();

	return useCallback(() => {
		if (isInBrowser) {
			if (isDevEnvironment()) {
				console.debug('Subscribed: onAuthStateChange');
			}

			getClient().auth.onAuthStateChange((event, session) => {
				if (isDevEnvironment()) {
					console.debug(`Subscription: onAuthStateChange; Event -> ${event}`);
				}

				if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
					const expires = new Date(0).toUTCString();
					document.cookie = `app-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
					document.cookie = `app-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;

					setAuthState(AuthState.SIGNED_OUT);
					resetAccount();
				} else if (
					session &&
          (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED')
				) {
					document.cookie = `app-access-token=${
						session.access_token
					}; path=/; max-age=${3600}; SameSite=Lax; secure`;
					document.cookie = `app-refresh-token=${
						session.refresh_token
					}; path=/; max-age=${3600}; SameSite=Lax; secure`;

					setAuthState(AuthState.SIGNED_IN);
				}

				if (session && event === 'SIGNED_IN') {
					setAccount(session.user);
					setAuthState(AuthState.SIGNED_IN);
				}
			});
		}
	}, []);
}
