import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/events';

// const idFetch = async () => {
//     let res = await fetchHandler('/me');
//     let data = await res.json()
//     return data
// }

// let userId = idFetch();

// export const createEvent = async (obj) => (
//   fetchHandler(baseUrl, getPostOptions(obj.type, obj.title, obj.start_date, obj.end_date, obj.end_time, obj.location, obj.borough, obj.description, obj.img))
// );

// eating errors here for simplicity
export const getAllEvents = async () => {
  const [events] = await fetchHandler(baseUrl);
  return events || [];
};

// export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

// export const updateUsername = async ({ id, username }) => (
//   fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
// );