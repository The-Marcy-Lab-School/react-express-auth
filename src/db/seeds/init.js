const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *
 *
 */

exports.seed = async (knex) => {
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  await knex('users').del();
  await User.create('cool_cat', '1234', 'cool cat', 'cool_cat@gmail.com');
  await User.create('l33t-guy', '1234', 'Moe', 'l33t-guy@gmail.com');
  await User.create('wowow', '1234', 'wowow guy', 'wowow@gmail.com');
  await User.create('marv', '1234', 'marv', 'm@gail.com');
  await User.create('aj', '1234', 'aj', 'aj@gail.com');
  await User.create('sam', '1234', 'sam', 'sam@gail.com');
  await User.create('kory', '1234', 'kory', 'kory@gail.com');
  await User.create('chu', '1234', 'chu', 'chu@gail.com');
  await User.create('nathaniel', '1234', 'nathaniel', 'nathaniel@gail.com');
  await User.create('jason', '1234', 'jason', 'jason@gail.com');
  await User.create('leo', '1234', 'leo', 'leo@gail.com');
  await User.create('mike', '1234', 'mike', 'mike@gail.com');
};
