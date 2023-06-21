const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('users').del()
  // await User.create('amanda', '1234');
  // await User.create('casterly', '1234');
  // await User.create('ashley', '1234');
  // await User.create('luis', '1234');
  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
};
