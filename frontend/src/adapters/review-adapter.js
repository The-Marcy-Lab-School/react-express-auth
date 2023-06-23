import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/reviews";

export const createReview = async ({
  user_id,
  page_id,
  review_body,
  rating,
}) => {
  return fetchHandler(
    baseUrl,
    getPostOptions({
      user_id,
      page_id,
      review_body,
      rating,
    })
  );
};
export const getAllReviews = async () => {
  const [reviews] = await fetchHandler(baseUrl);
  return reviews || [];
};

export const getReview = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateDescription = async ({ id, review_body }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, review_body }));
