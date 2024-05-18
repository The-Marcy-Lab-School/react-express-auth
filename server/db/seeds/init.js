const User = require('../models/User');
const Post = require('../models/Post');
const Follow = require('../models/Follow');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  console.log('seeding');
  await knex('follows').del(); // follows relies on users
  await knex('posts').del(); // posts relies on users
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE follows_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE posts_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');

  await Post.create('i am a cat', 'a1rwdivwsc5i4fwxp8b0', '1');
  await Post.create('so cozy', 'k0i0lnfzqsctbwuegffe', '1');
  await Post.create('wow', 'qox2qmazqvgmttiktgtz', '3');

  await Follow.create(1, 2)
  await Follow.create(1, 3)
  await Follow.create(3, 1)
  await Follow.create(2, 3)
};
