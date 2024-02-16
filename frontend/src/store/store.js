import { create } from 'zustand';
import { fetchRecentEvents } from '../adapters/event-adapter';
import { fetchUserEvents } from '../adapters/user-adapter';

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

  setUserEvents: async (id) => set({ events: await fetchUserEvents(id) }),
}));

// EventForm store
export const useEventFormStore = create((set) => ({
  selectedTags: [],

  addTag: (tag) =>
    set((state) => ({ selectedTags: [...state.selectedTags, tag] })),

  emptyTags: () => set({ selectedTags: [] }),

  setSelectedTags: (newArr) => set({ selectedTags: newArr }),

  err: {
    color: null,
    timeText: null,
    tagText: null,
    tagColor: null,
  },
  setErr: (newErr) => set({ err: newErr }),
}));

// User page store
export const useUserStore = create((set) => ({
  events: [],
  setUserEvents: async (id) => set({ events: await fetchUserEvents(id) }),

  userProfile: null,
  setUserProfile: (user) => set({ userProfile: user }),

  errorText: '',
  setErrorText: (msg) => set({ errorText: msg }),
}));

// Pagination store
export const usePaginationStore = create((set) => ({
  page: 6,
  setPage: (value) => set({ page: value * 6 }),

  previous: 0,
  setPrevious: (value) => set({ previous: (value - 1) * 6 }),

  pageNumber: 1,
  setPageNumber: (value) => set({ pageNumber: value }),

  pageLength: null,
  setPageLength: (value) => set({ pageLength: value }),

  reset: () => set({ page: 6, previous: 0, pageNumber: 1 }),
}));

// Exercise Store
export const useExerciseStore = create((set) => ({
  exerciseIndex: null,
  setExerciseIndex: (value) => set({ exerciseIndex: value }),
}));