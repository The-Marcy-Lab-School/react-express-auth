/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    await knex('events').insert([
      {user_id: 1, img_url: "hello", description: 'random description', date: '10/11/23', time: '1:30pm'},
      {user_id: 1, img_url: "random", description: 'anything', date: '8/21/23', time: '5:30pm'},
      {user_id: 3, img_url: "", description: 'hows it going', date: '7/22/23', time: '3:30pm'},
      {user_id: 3, img_url: "", description: 'hows it going', date: '7/22/23', time: '3:30pm'}
    ]);
  };
  
