import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
  token: string;
  username: string;
  authenticated: boolean;
  profilePicture: string;
}

interface Action {
  updateUser: (username: string, profilePicture: string, token: string) => void;
}

export const useAuthStore = create<AuthState & Action>()(
  persist(
    (set) => ({
      token: '',
      username: '',
      profilePicture: '',
      authenticated: false as boolean,
      updateUser: (username, profilePicture, token) => {
        return set({
          username: username,
          token: token,
          profilePicture: profilePicture,
          authenticated: true,
        });
      },
    }),
    {
      name: 'authStore',
    }
  )
);
