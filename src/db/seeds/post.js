/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('post').insert([
      {post_id: 1, user_id: 1, img_url: "hello", description: 'random description'},
      {post_id: 2, user_id: 1, img_url: "random", description: 'anything'},
      {post_id: 3, user_id: 3, img_url: "", description: 'hows it going'},
      {post_id: 36, user_id: 3, img_url: "", description: 'anytext'}
    ]);
  };
  