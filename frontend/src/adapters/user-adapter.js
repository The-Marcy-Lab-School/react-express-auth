import {
  fetchHandler,
  getPostOptions,
  getPatchOptions,
  deleteOptions,
} from '../utils';

const baseUrl = '/api/users';

export const createUser = async ({ username, password, fullName, email }) => {
  console.log(fullName);
  const name = fullName;
  console.log(name, username);
  const res = await fetchHandler(
    baseUrl,
    getPostOptions({ username, password, name, email })
  );
  return res;
};

export const fetchJoinedEvents = async (userId) => {
  const [events] = await fetchHandler(`${baseUrl}/events/${userId}/signed`);
  return events || [];
};

export const fetchUserEvents = async (userId) => {
  const [events] = await fetchHandler(`${baseUrl}/events/${userId}`);
  return events || [];
};

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => {
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
};
export const destroyUser = async ({ id }) => {
  fetchHandler(`${baseUrl}/${id}`, deleteOptions({ id }));
};

// const app = ({

// })
