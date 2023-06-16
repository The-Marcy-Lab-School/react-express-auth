import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/events';



export const createEvent = async (obj) => (
  await fetchHandler(baseUrl, getPostOptions(obj))
);

// eating errors here for simplicity
export const getAllEvents = async () => {
  const [events] = await fetchHandler(baseUrl);
  return events || [];
};

// export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

// export const updateUsername = async ({ id, username }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
// );