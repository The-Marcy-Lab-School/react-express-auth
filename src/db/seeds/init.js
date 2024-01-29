const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 * 
 */

exports.seed = async (knex) => {
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
  await knex('users').del()
  await User.create('cool_cat', '1234', "cool cat", "cool_cat@gmail.com");
  await User.create('l33t-guy', '1234', "Moe Lester","l33t-guy@gmail.com");
  await User.create('wowow', '1234', "wowow guy","wowow@gmail.com");
};
