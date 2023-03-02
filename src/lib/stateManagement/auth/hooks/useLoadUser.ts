import { useResetAccount, useSetAccount, useSetAuthState } from '@/lib/stateManagement/auth/setters';
import { useGetUser } from '@/lib/dataSource/features/auth/useGetUser';
import { useEffect } from 'react';
import { AuthState } from '@/lib/stateManagement/types/authState';

export function useLoadUser() {
	const setAccount = useSetAccount();
	const setAuthState = useSetAuthState();
	const resetAccount = useResetAccount();

	const {isLoading, isSuccess, data, isError} = useGetUser();

	useEffect(() => {
		if (isLoading && isSuccess) {
			setAuthState(AuthState.SIGNED_IN);
			setAccount(data);
		}

		if (!isLoading && isError) {
			setAuthState(AuthState.SIGNED_OUT);
			resetAccount();
		}
	}, [isLoading, isSuccess, isError]);
}