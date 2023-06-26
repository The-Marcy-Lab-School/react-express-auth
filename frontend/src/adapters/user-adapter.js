import { fetchHandler, getPostOptions, getPatchOptions } from "../utils";

const baseUrl = "/api/users";

export const createUser = async ({
  first_name,
  last_name,
  age,
  gender,
  race,
  ethnicity,
  username,
  password,
  email,
  picture
}) =>
  fetchHandler(
    baseUrl,
    getPostOptions({
      first_name,
      last_name,
      age,
      gender,
      race,
      ethnicity,
      username,
      password,
      email,
      picture
    })
  );

// eating errors here for simplicity
export const getAllUsers = async () => {
  const [users] = await fetchHandler(baseUrl);
  return users || [];
};

export const getUser = async (id) => fetchHandler(`${baseUrl}/${id}`);

export const updateUsername = async ({ id, username }) =>
  fetchHandler(`${baseUrl}/${id}`, getPatchOptions({ id, username }));
