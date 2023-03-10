import { useRouter } from 'next/router';
import { useAuthState } from '@/lib/stateManagement/auth/getters';
import { useEffect } from 'react';
import { AuthState } from '@/lib/stateManagement/types/authState';

export function useRedirectIfSignedIn(path = '/editor') {
  const { push } = useRouter();
  const authState = useAuthState();

  useEffect(() => {
    if (authState() === AuthState.SIGNED_IN) {
      push(path);
    }
  }, [authState]);
}
