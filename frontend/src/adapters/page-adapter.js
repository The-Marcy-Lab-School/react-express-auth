import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/pages";

export const createPost = async ({
  user_id,
  facility_doctor,
  specialty,
  description,
  address,
  overall_rating,
  is_facility,
  is_doctor,
  photo,
}) => {
  return fetchHandler(
    baseUrl,
    getPostOptions({
      user_id,
      facility_doctor,
      specialty,
      description,
      address,
      overall_rating,
      is_facility,
      is_doctor,
      photo,
    })
  );
};
export const getAllPages = async () => {
  const [pages] = await fetchHandler(baseUrl);
  return pages || [];
};

export const getPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateDescription = async ({ id, description }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, description }));
