import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = '/api/moods';

export const createMood = async ({ mood, level }) => {
    fetchHandler(baseUrl, getPostOptions({ mood, level }));
};

export const getAllMoods = async () => {
    const [moods] = await fetchHandler(baseUrl);
    return moods || [];
  };
  
  export const getMood = async (id) => fetchHandler(`${baseUrl}/${id}`);

  export const deleteMood = async (id) => fetchHandler(`${baseUrl}/${id}`, deleteOptions);
