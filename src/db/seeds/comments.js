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
  {
    user_id: 3,
    event_id: 1, 
    text: `Can't wait to stretch and relax!`
  },
  {
    user_id: 6, 
    event_id: 1, 
    text: `Yoga is the best way to start the day!`
  },
  {
    user_id: 5, 
    event_id: 2, 
    text: `Ready to push my limits!`
  },
  {
    user_id: 6, 
    event_id: 2, 
    text: `Is there a specific dress code or gear we should bring?`
  },
  {
    user_id: 7, 
    event_id: 2, 
    text: `Excited and a bit nervous. First time attending!`
  }
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del();
  await knex('comments').insert(comments);
};
