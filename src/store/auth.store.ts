import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
  token: string;
  username: string;
  authenticated: boolean;
}

interface Action {
  updateUser: (username: string, token: string) => void;
}

export const useAuthStore = create<AuthState & Action>()(
  persist(
    (set) => ({
      token: '',
      username: '',
      authenticated: false as boolean,
      updateUser: (username, token) => {
        return set({ username, token, authenticated: true });
      },
    }),
    {
      name: 'authStore',
    }
  )
);
