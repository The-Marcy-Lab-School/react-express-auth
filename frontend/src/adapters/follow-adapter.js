// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/users';

export const createFollower = async (user_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/followers`, getPostOptions());
}
export const unFollow = async (user_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/followers`, deleteOptions);
}

export const getFollowers = async (user_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/followers`);
}

export const getFollows = async (user_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/follows`);
}
