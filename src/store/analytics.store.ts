import { IPeer } from '@/models/IPeer';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AnalyticsState {
  communities: IPeer[];
  loading: boolean;
  setCommunities: (communities: IPeer[]) => void;
}

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set) => ({
      communities: [],
      loading: false,
      setCommunities: (to) => set(() => ({ communities: to })),
    }),
    {
      name: 'analyticsStore',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
