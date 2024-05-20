// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/users';

export const createLike = async (user_id, post_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}/likes`, getPostOptions());
}
export const unLike = async (user_id, post_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}/likes`, deleteOptions);
}

export const getLikesOfPost = async (user_id, post_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}/likes`);
}
