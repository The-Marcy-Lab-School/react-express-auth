const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'nick', password_hash: 'yessir', latitude: '-104.3323517', longitude: '11.-104.3323517', is_safe: true},
    {username: 'vick', password_hash: 'bessir', latitude: '85.5', longitude: '25.4', is_safe: true},
    {username: 'sick', password_hash: 'lessir', latitude: '143.8', longitude: '21', is_safe: true},
    {username: 'kick', password_hash: 'qessir', latitude: '73', longitude: '42', is_safe: true},
    {username: 'rick', password_hash: 'essir', latitude: '118', longitude: '34', is_safe: true},
  ]);
};