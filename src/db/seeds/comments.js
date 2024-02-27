/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const comments = [
  {
    user_id: 2,
    event_id: 1,
    text: `I'm ready for some yoga`,
  },
  {
    user_id: 3,
    event_id: 2,
    text: `I don't think I'm ready to sweat this much`,
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del();
  await knex('comments').insert(comments);
};
