const User = require('../models/user');
/**
 *   table.string('username').notNullable().unique();
  table.string('password_hash').notNullable();
 *   table.string('email').notNullable();
  table.string('pic');
  table.string('name');
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // await User.deleteAll();
  // await knex('grocery_list').del()
  // await knex('likes').del()
  // await knex('comments').del()
  await User.create('cool_cat', '124');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1235');
};
