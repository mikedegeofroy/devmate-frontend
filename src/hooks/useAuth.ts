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

    const url = `http://localhost:5207/api/auth/login?username=${encodeURIComponent(
      username
    )}`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(res);
  };

  const verifyCode = async (username: string, verification: string) => {
    if (authState != 'awaiting-verification')
      console.error('Incorrect usage of useAuth!');
    console.log(`verified code ${verification}`);

    const url = `http://localhost:5207/api/auth/verify/code`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        secret: verification,
      }),
    }).then((res) => res.json());

    console.log(res);

    if (res.user) {
      store.updateUser(res.user.username, res.user.token);
    } else {
      setAuthState('awaiting-password');
    }
  };

  const verifyPassword = async (username: string, password: string) => {
    if (authState != 'awaiting-password')
      console.error('Incorrect usage of useAuth!');
    console.log(`verified password ${password}`);

    const url = `http://localhost:5207/api/auth/verify/password`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        secret: password,
      }),
    }).then((res) => res.json());

    console.log(res);

    if (res.user) store.updateUser(res.user.username, res.user.token);
  };

  return {
    login,
    verifyCode,
    verifyPassword,
    state: authState,
    ...store,
  };
};
