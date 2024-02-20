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

export const updateUsername = async ( {id, username, bio} ) => {
  return await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username, bio}));
};

export const updateProfileImage = async ( id, profile_image ) => {
  return await fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, profile_image}));
};