import { fetchHandler, getPostOptions, deleteOptions } from "../utils";

const baseUrl = "/api/bookmark";

export const createBookmark = async ({ user_id, page_id }) => {
  return fetchHandler(baseUrl, getPostOptions({ user_id, page_id }));
};

export const deleteBookmark = async (id) => {
  return fetchHandler(`${baseUrl}/${id}`, deleteOptions());
};

export const getBookmark = async (id) =>{
  return fetchHandler(`${baseUrl}/${id}`)
}

export const getAllBookMark = async () => {
  const bookmarks = await fetchHandler(baseUrl);
  return bookmarks || [];
};

  