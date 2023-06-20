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
  fetchHandler(
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

export const getAllPost = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateDescription = async ({ id, description }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, description }));
