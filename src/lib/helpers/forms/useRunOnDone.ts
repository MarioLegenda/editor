import { useEffect } from 'react';

export function useRunOnDone(isLoading: boolean, isSuccess: boolean, onDone: () => void) {
	useEffect(() => {
		if (!isLoading && isSuccess) {
			onDone();
		}
	}, [isLoading, isSuccess]);
}