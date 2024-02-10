import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/posts';

export const getAllPosts = async () => {
    const [ allPosts ] = await fetchHandler(baseUrl);
    return allPosts || [];
};

export const getPost = async (id) => {
    return await fetchHandler(`${baseUrl}/${id}`)
};

export const getPostsFromUser = async (id) => {
    const [ postsFromUser ] = await fetchHandler(`/api/users/${id}/myposts`);
    return postsFromUser || [];
};

export const createPost = async ({ user_id, title, image, location, description }) => {
    return fetchHandler(`/api/users/${user_id}/posts`, getPostOptions({ title, image, location, description }))
}

export const deletePost = async ({ user_id, post_id }) => {
    return await fetchHandler(`/api/users/${user_id}/posts/${post_id}`, getPatchOptions({ post_id }));
}

export const updatePost = async ({ user_id, post_id, content }) => {
    return await fetchHandler(`/api/users/${user_id}/posts/${post_id}`, getPatchOptions({ post_id, content }));
}

