import { fetchHandler, getPostOptions, getPatchOptions } from '../utils';

const baseUrl = '/api/tags';

export const getAllTags = async () => {
  const [tags] = await fetchHandler(baseUrl);
  return tags || [];
};

export const createTag = async ({ name, page_id }) => {
  fetchHandler(baseUrl, getPostOptions({ name, page_id }));
};
