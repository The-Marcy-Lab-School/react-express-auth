const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Users
  await User.create("Jason", "Paulino", "jasonpaulino", "jasonp0830@gmail.com", "123");
  await User.create("Randy", "Pichardo", "randypichardo", "randypichardo1987@gmail.com", "123");
  await User.create("Staceyann", "King", "staceyannking", "staceyannking01@gmail.com", "123");
  await User.create("Magdalena", "Gero", "magdalenagero", "magdalenamgero@gmail.com", "123");
  await User.create("Shaina", "Guzman", "shainaguzman", "shainaguzman0624@gmail.com", "123");

  // Events
};
