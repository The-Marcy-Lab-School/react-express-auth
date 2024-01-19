const Task = require('../models/task');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
   // await Task.deleteAll();
    await Task.create('task1', 'do something');
    await Task.create('task2', 'fix this');
    await Task.create('task3', '1234');
    
};
