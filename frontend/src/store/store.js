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

// community store
export const useEventsStore = create((set, get) => ({
  events: [],
  copiedEvents: [],

  setRecentEvents: async () =>
    set({
      events: await fetchRecentEvents(),
      copiedEvents: await fetchRecentEvents(),
    }),

  setUserEvents: async (id) => set({ events: await fetchUserEvents(id) }),

  filterEvents: async (value) => {
    console.log(value);

    const filteredEvents = get().copiedEvents.filter((event) =>
      event.location.toLowerCase().includes(value.toLowerCase())
    );

    console.log(filteredEvents);

    set({ events: filteredEvents });
  },
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

// hot event store
export const useHotStore = create((set) => ({
  hotEvent: null,
  setHotEvent: (value) => set({ hotEvent: value }),
}));

export const useHoverStore = create((set) => ({
  isHovered1: false,
  setIsHovered1: (value) => set({ isHovered1: value }),
  isHovered2: false,
  setIsHovered2: (value) => set({ isHovered2: value }),
  isHovered3: false,
  setIsHovered3: (value) => set({ isHovered3: value }),
  isHovered4: false,
  setIsHovered4: (value) => set({ isHovered4: value }),
  isHovered5: false,
  setIsHovered5: (value) => set({ isHovered5: value }),
  isHovered6: false,
  setIsHovered6: (value) => set({ isHovered6: value }),
  isHovered7: false,
  setIsHovered7: (value) => set({ isHovered7: value }),
  isHovered8: false,
  setIsHovered8: (value) => set({ isHovered8: value }),
  isHovered9: false,
  setIsHovered9: (value) => set({ isHovered9: value }),
  isHovered10: false,
  setIsHovered10: (value) => set({ isHovered10: value }),
  isHovered11: false,
  setIsHovered11: (value) => set({ isHovered11: value }),
  isHovered12: false,
  setIsHovered12: (value) => set({ isHovered12: value }),
  isHovered13: false,
  setIsHovered13: (value) => set({ isHovered13: value }),
}));

export const usePartStore = create((set) => ({
  partSelected: 'none',
  setPartSelected: (value) => set({ partSelected: value }),
}));
