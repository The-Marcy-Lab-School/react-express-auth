const Logs = require('../models/logs');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('logs').del()
  //seeds for user 224 log entries
  await Logs.create(1, 1, 1, 1, 1, 224);
  await Logs.create(2, 2, 2, 2, 2, 224);
  await Logs.create(1, 3, 3, 3, 3, 224);
  await Logs.create(3, 2, 3, 3, 3, 224);
  await Logs.create(3, 3, 3, 4, 3, 224);
  await Logs.create(2, 4, 3, 4, 4, 224);
  await Logs.create(2, 2, 3, 5, 3, 224);
  await Logs.create(2, 3, 2, 5, 2, 224);
  await Logs.create(3, 2, 1, 4, 3, 224);
  await Logs.create(1, 3, 2, 5, 2, 224);
  //seeds for user 323 log entries
  await Logs.create(3, 1, 4, 2, 5, 323);
  await Logs.create(1, 2, 5, 4, 3, 323);
  await Logs.create(4, 1, 3, 5, 2, 323);
  await Logs.create(2, 5, 3, 1, 4, 323);
  await Logs.create(3, 4, 2, 1, 5, 323);
  await Logs.create(1, 5, 3, 2, 4, 323);
  await Logs.create(2, 3, 1, 5, 4, 323);
  await Logs.create(5, 2, 1, 4, 3, 323);
  await Logs.create(1, 4, 5, 2, 3, 323);
  await Logs.create(2, 1, 4, 5, 3, 323);
  //seeds for user 567 log entries
  await Logs.create(2, 1, 3, 4, 5, 567);
  await Logs.create(1, 5, 4, 2, 3, 567);
  await Logs.create(1, 4, 3, 5, 2, 567);
  await Logs.create(1, 2, 3, 5, 4, 567);
  await Logs.create(1, 3, 2, 5, 4, 567);
  await Logs.create(1, 5, 2, 3, 4, 567);
  await Logs.create(1, 2, 4, 3, 5, 567);
  await Logs.create(1, 3, 5, 2, 4, 567);
  await Logs.create(1, 4, 2, 5, 3, 567);
  await Logs.create(1, 2, 5, 4, 3, 567);
};
