import { fetchHandler, getPostOptions, deleteOptions } from "../utils";
const baseUrl = '/api';
// the logout route pretty much can't fail with our setup, but if yours can, change this
export const loadSusuDetails = async (id) => {
  return await fetchHandler(`${baseUrl}/susu/${id}`);
};