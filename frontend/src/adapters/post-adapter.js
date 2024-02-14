import { fetchHandler, getPostOptions, getPatchOptions, deleteOptions } from "../utils";

const baseUrl = '/api/posts';

export const getAllPosts = async () => {
    const [ allPosts ] = await fetchHandler(baseUrl);
    return allPosts || [];
};

export const getPost = async (id) => await fetchHandler(`${baseUrl}/${id}`);

export const getPostsFromUser = async (id) => {
    const [ postsFromUser ] = await fetchHandler(`/api/users/${id}/myposts`);
    return postsFromUser || [];
};

export const createPost = async ({ user_id, title, image, location, description }) => {
    return fetchHandler(`/api/users/${user_id}/posts`, getPostOptions({ title, image, location, description }))
}

export const deletePost = async ({ id, post_id }) => await fetchHandler(`/api/users/${id}/posts/${post_id}`, deleteOptions);

export const updatePost = async ({ user_id, post_id, content }) => {
    return await fetchHandler(`/api/users/${user_id}/posts/${post_id}`, deleteOptions({ post_id, content }));
}

export const getAllUserPosts = async (id) => fetchHandler(`/api/users/${id}/myposts`);
