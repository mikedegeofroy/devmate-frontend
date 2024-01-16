import { useAuthStore } from '@/store/auth.store';
import { useState } from 'react';

export type LoginState =
  | 'awaiting-login'
  | 'awaiting-verification'
  | 'awaiting-password'
  | 'logged-in';

export const useAuth = () => {
  const store = useAuthStore();
  const [authState, setAuthState] = useState<LoginState>(
    store.authenticated ? 'logged-in' : 'awaiting-login'
  );

  const login = async (username: string) => {
    if (authState != 'awaiting-login')
      console.error('Incorrect usage of useAuth!');
    setAuthState('awaiting-verification');

    console.log(`logging in as ${username}`);

    const url = `http://localhost:5207/api/auth/login`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(res);

    store.updateUser(username, res.token);
  };

  const verify = async (verification: string) => {
    if (authState != 'awaiting-verification')
      console.error('Incorrect usage of useAuth!');
    console.log(`verified code ${verification}`);
  };

  return {
    login,
    verify,
    state: authState,
    ...store,
  };
};
