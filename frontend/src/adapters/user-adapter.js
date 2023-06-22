import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password, location }) => (
  fetchHandler(baseUrl, getPostOptions({ username, password ,location }))
);

export const updateIsSafe = async ({ isSafe }) => {
  fetchHandler(baseUrl, getPatchOptions({ isSafe }))
}

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);
