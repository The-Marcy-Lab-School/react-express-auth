/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('moods').del()
  await knex('moods').insert([
    {mood: 'Happy', level: 'High', user_id: 1},
    {mood: 'Sad', level: 'Low', user_id: 2},
    {mood: 'Neutral', level: 'Medium', user_id: 3}
  ]);
};
