const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'nick', password_hash: 'yessir', latitude: '-84.187392', longitude: '35.7266481', is_safe: true},
    {username: 'vick', password_hash: 'bessir', latitude: '-103.3858109', longitude: '40.4451181', is_safe: true},
    {username: 'sick', password_hash: 'lessir', latitude: '143.8', longitude: '21', is_safe: true},
    {username: 'kick', password_hash: 'qessir', latitude: '73', longitude: '42', is_safe: true},
    {username: 'rick', password_hash: 'essir', latitude: '118', longitude: '34', is_safe: true},
  ]);
};