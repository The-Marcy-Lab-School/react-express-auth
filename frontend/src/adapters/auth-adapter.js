import { fetchHandler, getPostOptions, deleteOptions } from "../utils/fetchingUtils";

const baseUrl = '/api/auth';

export const registerUser = async ({ username, password }) => {
  return fetchHandler(`${baseUrl}/register`, getPostOptions({ username, password }))
};


export const loginUser = async ({ username, password }) => {
  return fetchHandler(`${baseUrl}/login`, getPostOptions({ username, password }))
};

export const checkForLoggedInUser = async () => {
  const [data] = await fetchHandler(`${baseUrl}/me`);
  return data;
};

// the logout route pretty much can't fail with our setup, but if yours can, change this
export const logoutUser = async () => {
  await fetchHandler(`${baseUrl}/logout`, deleteOptions);
  return true;
};
