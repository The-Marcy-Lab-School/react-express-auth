const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'nick', password_hash: 'yessir', latitude: '74', longitude: '40', is_safe: true},
    {username: 'vick', password_hash: 'bessir', latitude: '80', longitude: '25', is_safe: true},
    {username: 'sick', password_hash: 'lessir', latitude: '112', longitude: '33', is_safe: true},
    {username: 'kick', password_hash: 'qessir', latitude: '73', longitude: '42', is_safe: true},
    {username: 'rick', password_hash: 'essir', latitude: '118', longitude: '34', is_safe: true},
  ]);
};