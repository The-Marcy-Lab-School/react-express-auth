const User = require('../models/user');
const Log = require('../models/logs');
const logRoutes = require('../../middleware/log-routes');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create(224, 'cool_cat', 'coolcat@gmail.com', '1234');
  await User.create(323,'l33t-guy', 'l33t-guy@gmail.com', '1234');
  await User.create(567, 'wowow', 'wowow@gmail.com', '1234');
  //seeds for user 224 log entries
  await Log.create(224, 1, 1, 1, 1, 1);
  await Log.create(224, 2, 2, 2, 2, 2);
  await Log.create(224, 1, 3, 3, 3, 3);
  await Log.create(224, 3, 2, 3, 3, 3);
  await Log.create(224, 3, 3, 3, 4, 3);
  await Log.create(224, 2, 4, 3, 4, 4);
  await Log.create(224, 2, 2, 3, 5, 3);
  await Log.create(224, 2, 3, 2, 5, 2);
  await Log.create(224, 3, 2, 1, 4, 3);
  await Log.create(224, 1, 3, 2, 5, 2);
  //seeds for user 323 log entries
  await Log.create(323, 3, 1, 4, 2, 5);
  await Log.create(323, 1, 2, 5, 4, 3);
  await Log.create(323, 4, 1, 3, 5, 2);
  await Log.create(323, 2, 5, 3, 1, 4);
  await Log.create(323, 3, 4, 2, 1, 5);
  await Log.create(323, 1, 5, 3, 2, 4);
  await Log.create(323, 2, 3, 1, 5, 4);
  await Log.create(323, 5, 2, 1, 4, 3);
  await Log.create(323, 1, 4, 5, 2, 3);
  await Log.create(323, 2, 1, 4, 5, 3);
  //seeds for user 567 log entries
  await Log.create(567, 2, 1, 3, 4, 5);
  await Log.create(567, 1, 5, 4, 2, 3);
  await Log.create(567, 1, 4, 3, 5, 2);
  await Log.create(567, 1, 2, 3, 5, 4);
  await Log.create(567, 1, 3, 2, 5, 4);
  await Log.create(567, 1, 5, 2, 3, 4);
  await Log.create(567, 1, 2, 4, 3, 5);
  await Log.create(567, 1, 3, 5, 2, 4);
  await Log.create(567, 1, 4, 2, 5, 3);
  await Log.create(567, 1, 2, 5, 4, 3);
};
