import { fetchHandler, getPostOptions, getPatchOptions } from '../utils';

const baseUrl = '/api/pages';

export const getAllPages = async () => {
  const [pages] = await fetchHandler(baseUrl);
  return pages || [];
};

export const createPage = async ({ title, content, user_id }) => {
  fetchHandler(baseUrl, getPostOptions({ title, content, user_id }));
};
