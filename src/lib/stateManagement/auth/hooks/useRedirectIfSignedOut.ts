import { useRouter } from 'next/router';
import { useAuthState } from '@/lib/stateManagement/auth/getters';
import { useEffect } from 'react';
import { AuthState } from '@/lib/stateManagement/types/authState';

export function useRedirectIfSignedOut(path = '/sign-in') {
	const router = useRouter();
	const authState = useAuthState();

	useEffect(() => {
		if (authState() === AuthState.SIGNED_OUT) {
			router.push(path);
		}
	}, [authState]);
}