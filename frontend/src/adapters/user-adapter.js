// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password }) => {
  return fetchHandler(baseUrl, getPostOptions({ username, password }))
};

// For this one adapter, if an error occurs, we handle it here by printing
// the error and return an empty array
export const getAllUsers = async () => {
  const [users, error] = await fetchHandler(baseUrl);
  if (error) console.log(error); // print the error for simplicity.
  return users || [];
};

export const getUser = async (id) => {
  return fetchHandler(`${baseUrl}/${id}`);
}

export const updateUsername = async ({ id, username }) => {
  return fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
}

