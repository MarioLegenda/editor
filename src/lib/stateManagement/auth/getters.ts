import { useRecoilValue } from 'recoil';
import { accountAtom } from '@/lib/stateManagement/auth/account';
import { useCallback } from 'react';
import { authStateAtom } from '@/lib/stateManagement/auth/state';

export function useAccount() {
	const account = useRecoilValue(accountAtom);
  
	return useCallback(() => account, [account]);
}

export function useAuthState() {
	const state = useRecoilValue(authStateAtom);

	return useCallback(() => state, [state]);
}