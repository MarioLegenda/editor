import { atom } from 'recoil';
import { AuthState } from '@/lib/stateManagement/types/authState';

export const authStateAtom = atom<AuthState>({
	key: 'auth.auth_state',
	default: AuthState.IDLE,
});