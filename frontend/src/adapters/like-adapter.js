import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = `/api/users`;

export const uploadLike = async ({ post_id, user_id }) => {
    return await fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}/likes`, getPostOptions({ post_id }));
}

export const deleteLike = async ({ post_id, user_id, like_id }) => {
    return await fetchHandler(`${baseUrl}/${user_id}/posts/${post_id}/likes/${like_id}`, getPatchOptions({ post_id }));
}

export const getAllPostLikes = async (id) => {
    const [postLikes] = await fetchHandler(`/api/posts/${id}/likes`);
    return postLikes || [];
    // console.log(postLikes)
}

export const getAllUserLikes = async (id) => {
    const [ userLikes ] = await fetchHandler(`${baseUrl}/${id}/userlikes`);
    return userLikes || [];
};


