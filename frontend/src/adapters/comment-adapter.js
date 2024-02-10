import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/comments';

export const createComment = async ({ content, post_id, user_id }) => {
    return await fetchHandler(`/api/users/${user_id}/posts/${post_id}/comments`, getPostOptions(content))
}

export const getAllComments = async () => {
    const [ allComments ] = await fetchHandler(baseUrl);
    return allComments || [];
}

export const getCommentsFromPost = async (id) => {
    const [ commentsFromPost ] = await fetchHandler(`${baseUrl}/${id}`);
    return commentsFromPost || [];
}

export const getAllUserComments = async ({ user_id, post_id }) => {
    const [ userComments ] = await fetchHandler(`/api/users/${user_id}/posts/${post_id}/mycomments`);
    return userComments || [];
}

export const deleteComment = async ({ user_id, post_id, comment_id }) => {
    return await fetchHandler(`/api/users/${user_id}/posts/${post_id}/comments/${comment_id}`, getPatchOptions({ post_id }))
}