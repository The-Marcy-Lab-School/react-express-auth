const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('users').del();
  await knex('users').insert([{username:'cool_cat',password_hash: '1234'}, {username:'l33t-guy',password_hash: '1234'}, {username:'wowow',password_hash: '1234'}]);
  // await User.create('cool_cat', '1234');
  // await User.create('l33t-guy', '1234');
  // await User.create('wowow', '1234');
};
