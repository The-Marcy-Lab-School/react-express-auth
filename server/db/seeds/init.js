const User = require('../models/User');
const Post = require('../models/Post');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  console.log('seeding');
  await knex('posts').del(); // posts relies on users
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE posts_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');

  await Post.create('i am a cat', '1');
  await Post.create('i like milk', '1');
  await Post.create('wow', '3');
};
