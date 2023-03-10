import { User } from '@supabase/gotrue-js';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { accountAtom } from '@/lib/stateManagement/auth/account';
import { authStateAtom } from '@/lib/stateManagement/auth/state';
import { AuthState } from '@/lib/stateManagement/types/authState';

export function useSetAccount() {
  const setAccount = useSetRecoilState(accountAtom);

  return (account: User) => setAccount(account);
}

export function useResetAccount() {
  const reset = useResetRecoilState(accountAtom);

  return () => reset();
}

export function useSetAuthState() {
  const setAccount = useSetRecoilState(authStateAtom);

  return (state: AuthState) => setAccount(state);
}
