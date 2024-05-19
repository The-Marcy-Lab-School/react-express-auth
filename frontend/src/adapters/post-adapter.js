// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/users';

export const createPost = async ({ content, img_public_id, user_id }) => {
  return fetchHandler(`${baseUrl}/${user_id}/posts`, getPostOptions({ content, img_public_id }));
  // return [data, error]
}

export const getPostsByUserId = async (user_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/posts`);
  // return [data, error]
}

export const getAllPosts = async () => {
  return fetchHandler(`${baseUrl}/posts`);
}

export const getAllPostsOfFollows = async (user_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/follows/posts`);
}

export const deletePost = async (user_id, post_id) => {
  return fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}`, deleteOptions);
}