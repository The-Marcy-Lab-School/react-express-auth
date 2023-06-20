import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ first_name, last_name, username, email, password }) => (
  fetchHandler(baseUrl, getPostOptions({ first_name, last_name, username, email, password }))
);

export const joinEvent = async ({userId, eventId}) => {
  await fetchHandler(`${baseUrl}/${userId}/events/${eventId}`, getPostOptions({userId, eventId})) 
}

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const listAllJoined = async (userId) => {
  const result = await fetchHandler(`${baseUrl}/${userId}/joinedEvents`)
  return result;
}
export const listAllCreated = async (userId) => {
  const result = await fetchHandler(`${baseUrl}/${userId}/createdEvents`)
  return result;
}

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);
