/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('journal_entries').del()
  await knex('journal_entries').insert([{content: 'Today was a day', date: '1/17', user_id: 1}, {content: 'hihi', date: '1/17', user_id: 2},{content: 'lol', date: '1/17', user_id: 3}]);
};
