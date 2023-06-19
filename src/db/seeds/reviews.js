/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {review_id:1, user_id: 1, post_id: 1, review_body: 'Dr. Albert is an exceptional cardiologist! His expertise and caring nature made me feel confident in his care. I highly recommend him for any heart-related concerns.', rating:3},
    {review_id:2, user_id: 2, post_id: 2, review_body: 'Dr. Johnson is a fantastic dermatologist! She accurately diagnosed my skin condition and provided effective treatment. Her friendly demeanor and attention to detail were truly impressive.', rating:4},
    {review_id:3, user_id: 3, post_id: 3, review_body: 'Dr. Anderson is a skilled orthopedic surgeon! He performed my knee surgery with precision, and Im incredibly grateful for his expertise. His professionalism and post-operative care were outstanding.', rating:2},
  ]);
};