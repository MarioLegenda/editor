import { useCallback, useState } from 'react';

export function useSimpleUiState<T extends string>(states: Record<T, boolean>) {
	const [current, setCurrent] = useState<T>();
	const [internalStates, setInternalStates] = useState(states);

	const onSet = useCallback((state: T) => {
		const t = {...internalStates};
		const keys = Object.keys(t);

		for (const key of keys) {
			if (key === state) {
				t[key as T] = true;
			} else {
				t[key as T] = false;
			}
		}

		setInternalStates(t);
		setCurrent(state);
	}, [current, internalStates]);

	const onClear = useCallback((state: T) => {
		const t = {...internalStates};
		const keys = Object.keys(t);

		for (const key of keys) {
			if (key === state) {
				t[key as T] = false;
			}
		}

		setInternalStates(t);
		setCurrent(undefined);
	}, [current, internalStates]);

	return {
		set: onSet,
		clear: onClear,
		current,
	};
}