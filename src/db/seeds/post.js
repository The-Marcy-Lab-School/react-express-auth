/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('posts').del() // to first delete ALL data in the table before putting data
  await knex.table('posts').insert([
    {user_id: 1, title: 'Plastic bottle hunt', description: 'Picking up plastic bottles that are laying around and putting them in our trash bags', location: 'Central Park', image: 'https://reinventsouthafrica.files.wordpress.com/2014/12/20141206_083933.jpg?w=640' },
  ]);
};
