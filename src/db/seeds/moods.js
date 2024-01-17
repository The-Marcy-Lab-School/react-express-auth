/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('moods').del()
  await knex('moods').insert([
    {Mood: 'Happy', Level: 'High'},
    {Mood: 'Sad', Level: 'Low'},
    {Mood: 'Neutral', Level: 'Medium'}
  ]);
};
