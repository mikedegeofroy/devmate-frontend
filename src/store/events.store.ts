import { IEvent } from '@/types/IEvent';
import { create } from 'zustand';

export interface EventsState {
  state: 'editing' | 'overview';
  selectedEvent: IEvent;
}

interface Action {
  editTitle: (title: string) => void;
  editDescription: (description: string) => void;
  editPrice: (price: number) => void;
  editState: (state: 'editing' | 'overview') => void;
  editDate: (date: string) => void;
  editSelectedEvent: (event: IEvent) => void;
}

export const useEventsStore = create<EventsState & Action>()((set) => ({
  state: 'overview',
  selectedEvent: {
    id: -1,
    userId: 0,
    title: '',
    description: '',
    startDateTime: '',
    endDateTime: '',
    total: 0,
    occupied: 0,
    price: 0,
    cover: '',
  },
  editTitle: (title: string) =>
    set((store) => {
      return {
        selectedEvent: {
          ...store.selectedEvent,
          title: title,
        },
      };
    }),
  editDescription: (description: string) =>
    set((store) => {
      return {
        selectedEvent: {
          ...store.selectedEvent,
          description: description,
        },
      };
    }),
  editPrice: (price: number) =>
    set((store) => {
      return {
        selectedEvent: {
          ...store.selectedEvent,
          price: price,
        },
      };
    }),
  editDate: (date: string) =>
    set((store) => {
      return {
        selectedEvent: {
          ...store.selectedEvent,
          startDateTime: date,
        },
      };
    }),
  editState: (state) => set({ state: state }),
  editSelectedEvent: (event) => set({ selectedEvent: event }),
}));
