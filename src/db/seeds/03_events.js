/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {latitude: '85', longitude: '80', description: 'yessir', title: 'kvr ek', type: 'NY', img_url: 'dkfmvdskvmdk'},
    {latitude: '35', longitude: '80', description: 'ressir', title: 'vjrkv', type: 'NY', img_url: 'dkfmvdskvmdk'},
    {latitude: '65', longitude: '20', description: 'tssir', title: 'vkre', type: 'NY', img_url: 'dkfmvdskvmdk'},
    {latitude: '85', longitude: '90', description: 'ressir', title: 'tkgt', type: 'NY', img_url: 'dkfmvdskvmdk'},
    {latitude: '83', longitude: '30', description: 'fessir', title: 'gmtkg', type: 'NY', img_url: 'dkfmvdskvmdk'},
  ]);
};
