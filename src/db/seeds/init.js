const User = require('../models/user');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('users').del()
  await User.create('cool_cat', 'coolcat@gmail.com', '1234');
  await User.create('l33t-guy', 'l33t-guy@gmail.com', '1234');
  await User.create('wowow', 'wowow@gmail.com', '1234');
};
