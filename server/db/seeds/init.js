const User = require("../../models/User");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await Promise.all([
    knex("likes").del(),
    knex("posts").del(),
    knex("users").del(),
  ]);

  await Promise.all([
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex.raw("ALTER SEQUENCE posts_id_seq RESTART WITH 1"),
    knex.raw("ALTER SEQUENCE likes_id_seq RESTART WITH 1"),
  ]);

  const [user1, user2] = await Promise.all([
    User.create("cool_cat", "1234"),
    User.create("l33t-guy", "1234"),
    User.create("wowow", "1234"),
  ]);

  const post1 = await knex("posts")
    .insert({
      title: "First Post",
      body: "This is the first post!",
      user_id: user1.id,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning("*");

  const post2 = await knex("posts")
    .insert({
      title: "Second Post",
      body: "This is the second post!",
      user_id: user2.id,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning("*");

  await knex("likes").insert([
    {
      user_id: user1.id,
      post_id: post1[0].id,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: user2.id,
      post_id: post1[0].id,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: user1.id,
      post_id: post2[0].id,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
};
