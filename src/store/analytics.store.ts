import { IPeer } from '@/models/IPeer';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AnalyticsState {
  communities: IPeer[];
  setCommunities: (communities: IPeer[]) => void;
}

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set) => ({
      communities: [],
      setCommunities: (to) =>
        set(() => {
          console.log(to);
          return { communities: to };
        }),
    }),
    {
      name: 'analyticsStore',
    }
  )
);
