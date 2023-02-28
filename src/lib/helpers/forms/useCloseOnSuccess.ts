import { useEffect } from 'react';

export function useCloseOnSuccess(isLoading: boolean, isSuccess: boolean, onCancel: () => void) {
	useEffect(() => {
		if (!isLoading && isSuccess) {
			onCancel();
		}
	}, [isLoading, isSuccess]);
}