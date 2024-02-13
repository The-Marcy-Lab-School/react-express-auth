import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = '/api/comments';

// export const createComment = async ({ content, post_id, user_id }) => {
//     return await fetchHandler(`/api/users/${user_id}/posts/${post_id}/comments`, getPostOptions(content))
// }
export const createComment = async ({content, post_id, user_id}) => {
    const time = '1am' //dummy data 
    return fetchHandler(`/api/users/${user_id}/posts/${post_id}/comments`, getPostOptions({content, time}))
  }

export const getAllComments = async () => fetchHandler(baseUrl);

// export const getCommentsFromPost = async (id) => {
//     const [ commentsFromPost ] = await fetchHandler(`${baseUrl}/${id}`);
//     return commentsFromPost || [];
// }
export const getCommentsFromPost = async (id) => fetchHandler(`${baseUrl}/${id}`)

// export const getAllUserComments = async ({ id }) => {
//     const [ userComments ] = await fetchHandler(`/api/users/${id}/mycomments`)
//     return userComments || [];
// };

export const getAllUserComments = async (id) => fetchHandler(`/api/users/${id}/mycomments`);

export const deleteComment = async ({ user_id, post_id, comment_id }) => fetchHandler(`/api/users/${user_id}/posts/${post_id}/comments/${comment_id}`, getPatchOptions({ post_id }));