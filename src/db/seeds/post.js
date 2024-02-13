/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('posts').del() // to first delete ALL data in the table before putting data
  await knex.table('posts').insert([
    {user_id: 1, title: 'Plastic bottle hunt', description: 'Picking up plastic bottles that are laying around and putting them in our trash bags', location: 'Central Park', image: 'https://reinventsouthafrica.files.wordpress.com/2014/12/20141206_083933.jpg?w=640' },
    {user_id: 2, title: 'Community Garden Day', description: 'Helping maintain the community garden and planting new flowers.', location: 'Community Garden', image: 'https://live.staticflickr.com/8636/28251733106_198e86680c.jpg' },
    {user_id: 3, title: 'Beach Cleanup', description: 'Cleaning up litter on the beach for a cleaner environment.', location: 'Ocean Beach', image: 'https://response.restoration.noaa.gov/sites/default/files/images/%5Buid%5D/20160413_NOAA_CREP_003_0.JPG' },
    {user_id: 4, title: 'test 1', description: 'test 1', location: 'test 1'}, 
    {user_id: 4, title: 'test 2', description: 'test 2', location: 'test 2' },
    {user_id: 4, title: 'test 3', description: 'test 3', location: 'test 3' },
    {user_id: 4, title: 'test 4', description: 'test 4', location: 'test 4' },
    {user_id: 4, title: 'test 5', description: 'test 5', location: 'test 5' },
    {user_id: 4, title: 'test 6', description: 'test 6', location: 'test 6' },
    {user_id: 4, title: 'test 7', description: 'test 7', location: 'test 7' },
    {user_id: 4, title: 'test 8', description: 'test 8', location: 'test 8' },
    {user_id: 4, title: 'test 9', description: 'test 9', location: 'test 9' },
    {user_id: 4, title: 'test 10', description: 'test 10', location: 'test 10' },
  ]);
};
