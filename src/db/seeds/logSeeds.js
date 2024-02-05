const Logs = require('../models/logs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('logs').del()
  //seeds for user 224 log entries
  await Logs.create(2, 1, 4, 3, 5, 1);
  await Logs.create(3, 2, 1, 5, 4, 1);
  await Logs.create(4, 3, 2, 1, 5, 1);
  await Logs.create(1, 4, 3, 2, 1, 1);
  await Logs.create(5, 1, 2, 4, 3, 1);
  await Logs.create(2, 5, 1, 3, 4, 1);
  await Logs.create(3, 2, 4, 1, 5, 1);
  await Logs.create(1, 3, 5, 2, 2, 1);
  await Logs.create(4, 1, 3, 5, 2, 1);
  await Logs.create(2, 4, 1, 3, 5, 1);
  await Logs.create(5, 2, 4, 1, 3, 1);
  await Logs.create(3, 5, 2, 1, 4, 1);
  await Logs.create(1, 3, 4, 2, 5, 1);
  await Logs.create(4, 1, 5, 3, 2, 1);
  await Logs.create(2, 4, 3, 1, 5, 1);
  await Logs.create(5, 2, 1, 4, 3, 1);
  await Logs.create(3, 5, 4, 2, 1, 1);
  await Logs.create(1, 3, 2, 5, 4, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
  await Logs.create(5, 2, 3, 4, 1, 1);
  await Logs.create(3, 5, 1, 2, 4, 1);
  await Logs.create(1, 3, 4, 5, 2, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
  await Logs.create(5, 2, 3, 4, 1, 1);
  await Logs.create(3, 5, 1, 2, 4, 1);
  await Logs.create(1, 3, 4, 5, 2, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
  await Logs.create(5, 2, 3, 4, 1, 1);
  await Logs.create(3, 5, 1, 2, 4, 1);
  await Logs.create(1, 3, 4, 5, 2, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
  await Logs.create(5, 2, 3, 4, 1, 1);
  await Logs.create(3, 5, 1, 2, 4, 1);
  await Logs.create(1, 3, 4, 5, 2, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
  await Logs.create(5, 2, 3, 4, 1, 1);
  await Logs.create(3, 5, 1, 2, 4, 1);
  await Logs.create(1, 3, 4, 5, 2, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
  await Logs.create(5, 2, 3, 4, 1, 1);
  await Logs.create(3, 5, 1, 2, 4, 1);
  await Logs.create(1, 3, 4, 5, 2, 1);
  await Logs.create(4, 1, 2, 3, 5, 1);
  await Logs.create(2, 4, 5, 1, 3, 1);
};
