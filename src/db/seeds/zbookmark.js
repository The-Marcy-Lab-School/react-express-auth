/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("bookmark").insert([
    {
      user_id: 1,
      page_id: 6,
    },
    {
      user_id: 2,
      page_id: 5,
    },
    {
      user_id: 3,
      page_id: 4,
    },
    {
      user_id: 4,
      page_id: 3,
    },
    {
      user_id: 5,
      page_id: 2,
    },
    {
      user_id: 6,
      page_id: 1,
    },
  ]);
};
