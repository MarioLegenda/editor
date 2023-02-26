import { isDevEnvironment } from '@/lib/helpers/isDevEnvironment';
import { AtomEffect } from 'recoil';
import { isBrowser } from '@/lib/helpers/isBrowser';
import { Auth } from '@/lib/stateManagement/types/auth';

export function localStorageEffect<T>(name: string): AtomEffect<T> {
	return ({onSet, trigger, setSelf}) => {
		if (!isDevEnvironment() || !isBrowser()) {
			return;
		}

		if (trigger === 'get') {
			if (!isDevEnvironment()) {
				return;
			}

			if (!isBrowser()) {
				return;
			}

			const rawAccount = localStorage.getItem(name);

			if (rawAccount) {
				const account = JSON.parse(rawAccount);
        
				setSelf(account);
			}
		}

		onSet((user: T) => {
			if (!isDevEnvironment() || !isBrowser()) {
				return;
			}

			if (!user) {
				localStorage.removeItem(name);

				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				setSelf(null);

				return;
			}

			const rawAccount = localStorage.getItem(name);

			if (!rawAccount) {
				localStorage.setItem(Auth.AUTH_ACCOUNT, JSON.stringify(user));
			}
		});
	};
}