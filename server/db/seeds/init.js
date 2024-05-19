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

  await User.create('cool_cat', '1234', 'i am a cat. meow');
  await User.create('l33t-guy', '1234', 'I am Elite! You want some?');
  await User.create('wowow', '1234', '(owen wilson voice) Wow....');
  await User.create('ben', '1234', 'My name is Ben, I work at the Marcy Lab School!');
  await User.create('gonzalo', '1234', 'My name is Gonzalo, I work at the Marcy Lab School!');
  await User.create('carmen', '1234', 'My name is Carmen, I work at the Marcy Lab School!');
  await User.create('zo', '1234', 'My name is Zo, I work at the Marcy Lab School!');

  await Post.create('wow', 'qox2qmazqvgmttiktgtz', '3');
  await Post.create('i am a cat', 'a1rwdivwsc5i4fwxp8b0', '1');
  await Post.create('its a nice flower', 'kka2vx0w6idu2xeoo8tj', '2');
  await Post.create('so cozy', 'k0i0lnfzqsctbwuegffe', '1');
  await Post.create('another wow', 'gbwjb5gj1suvsrzacsmt', '3');
  await Post.create('ooOoOOOOooOOOO', 'gcquazwk6mxro2ymzynz', '4');
  await Post.create('the wows just keep wowing', 'xxfzpyxdgznuawudtvat', '3');

  await Follow.create(1, 2)
  await Follow.create(1, 3)
  await Follow.create(3, 1)
  await Follow.create(2, 3)
};
