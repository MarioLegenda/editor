import { useMutation } from 'react-query';
import getClient from '@/lib/supabase/client';
import { useCallback } from 'react';

export function useSignOut() {
  const mutation = useMutation(async () => {
    const { error } = await getClient().auth.signOut();

    if (error) {
      throw new Error('Cannot sign in user');
    }
  });

  return {
    mutation,
    signOut: useCallback(() => mutation.mutate(), []),
  };
}
