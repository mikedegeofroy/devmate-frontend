import { useAuthStore } from '@/store/auth.store';
import { useState } from 'react';

export type LoginState =
  | 'awaiting-login'
  | 'awaiting-verification'
  | 'logged-in';

export const useAuth = () => {
  const store = useAuthStore();
  const [authState, setAuthState] = useState<LoginState>(
    store.authenticated ? 'logged-in' : 'awaiting-login'
  );

  const login = async () => {
    if (authState != 'awaiting-login')
      console.error('Incorrect usage of useAuth!');
    setAuthState('awaiting-verification');

    const url = `http://localhost:5207/api/auth/login`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    return res.code;
  };

  const verifyLogin = async (code: string) => {
    if (authState != 'awaiting-verification')
      console.error('Incorrect usage of useAuth!');

    const url = `http://localhost:5207/api/auth/verify?code=${code}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    if (res.user) {
      store.updateUser(
        res.user.username,
        res.user.profilePicture,
        res.user.secret
      );
      setAuthState('logged-in');
    }
  };

  return {
    login,
    verifyLogin,
    state: authState,
    ...store,
  };
};
