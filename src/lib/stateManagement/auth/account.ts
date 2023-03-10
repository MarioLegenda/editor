import { atom } from 'recoil';
import { User } from '@supabase/gotrue-js';
import { loggingEffect } from '@/lib/stateManagement/effects/loggingEffect';
import { localStorageEffect } from '@/lib/stateManagement/effects/localStorageEffect';
import { Auth } from '@/lib/stateManagement/types/auth';
import { LocalStorage } from '@/lib/stateManagement/types/localStorage';

export const accountAtom = atom<User | null>({
	key: Auth.AUTH_ACCOUNT,
	default: null,
	effects: [
		loggingEffect<User | null>(Auth.AUTH_ACCOUNT),
		localStorageEffect<User | null>(LocalStorage.AUTH_ACCOUNT),
	],
});
