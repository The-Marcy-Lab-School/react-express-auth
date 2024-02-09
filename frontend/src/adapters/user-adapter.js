import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/users';

export const createUser = async ({ username, password}) => (
  fetchHandler(baseUrl, getPostOptions({ username, password}))
);

export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const getPost = async (id) => fetchHandler(`/api/posts/${id}`);

export const getCommentsFromPost = async (id) => fetchHandler(`/api/comments/${id}`)

export const uploadComment = async (content, post_id, user_id) => {
  fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}/comments`, getPostOptions(content))
}

export const updateUsername = async ({ id, username }) => (
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }))
);
