import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password }) => {
  return await fetchHandler(baseUrl, getPostOptions({ username, password}));
};

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => {
  return await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
};
