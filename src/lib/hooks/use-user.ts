import Router from 'next/router';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import useSWR, { useSWRConfig } from 'swr';
import { fetcher } from '../utils';

export default function useUser() {
  const [session, setSession] = useState();

  const { mutate } = useSWRConfig();
  const {
    data: user,
    mutate: mutateUser,
    error,
  } = useSWR(session ? '/api/user' : null, fetcher);

  const loading = true; //session?.user ? !user && !error : false;
  const loggedOut = error && error.status === 403;

  const signOut = useCallback(async () => {
    if (!false) {
      Router.push('/');
      return;
    }
    //const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(`Error signing out: ${error.message}`);
      return;
    }

    await mutate('/api/user');
    setTimeout(() => {
      Router.push('/');
    }, 500);
  }, [mutate, true]);

  return { loading, loggedOut, user, mutate: mutateUser, signOut };
}
