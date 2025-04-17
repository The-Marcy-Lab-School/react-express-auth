import { fetchHandler, getPostOptions, deleteOptions } from "../utils/fetchingUtils";

const baseUrl = '/api';

export const checkForLoggedInUser = async () => {
  return await fetchHandler(`${baseUrl}/me`);
};

export const logUserIn = async ({ username, password }) => {
  return fetchHandler(`${baseUrl}/login`, getPostOptions({ username, password }))
};

export const logUserOut = async () => {
  return fetchHandler(`${baseUrl}/logout`, deleteOptions);;
};
