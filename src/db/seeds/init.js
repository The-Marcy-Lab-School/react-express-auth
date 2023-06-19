const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('John', 'Doe', 25, "male", "Caucasian", "English", "johndoe123", "hashed_password_123", "john.doe@example.com");
  await User.create('Jane', 'Doe', 23, "Female", "African American", "Jamaican", "janesmith456", "hashed_password_456", "jane.smith@example.com");
  await User.create('Michael', 'Johnson', 89, "Male", "Asian", "Chinese", "michaelj88", "hashed_password_789", "michael.johnson@example.com");
};
