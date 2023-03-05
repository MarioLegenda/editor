import { isDevEnvironment } from '@/lib/helpers/isDevEnvironment';
import { AtomEffect } from 'recoil';

export function loggingEffect<T>(name: string): AtomEffect<T> {
	return ({ onSet }) => {
		if (!isDevEnvironment()) {
			return;
		}

		onSet((user: T) => {
			console.debug(`Setting ${name} with value: ${JSON.stringify(user)}`);
		});
	};
}
