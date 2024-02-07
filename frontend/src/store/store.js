import { create } from 'zustand';
import { fetchRecentEvents } from '../adapters/event-adapter';

export const useErrorStore = create((set) => ({
  errorText: '',
  setErrorText: (msg) => set({ errorText: msg }),
}));

export const useWorkoutStore = create((set) => ({
  workout: '',

  setWorkout: (workout) => set({ workout }),
}));

export const useEventsStore = create((set) => ({
  events: [],
  setRecentEvents: async () => set({ events: await fetchRecentEvents() }),
}));

export const useTagStore = create((set) => ({
  selectedTags: [],
  setSelectedTags: (newArr) => set({ selectedTags: newArr }),
}));
