const User = require('../models/user');
require('dotenv').config();

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // delete everythingin the right order
  // await knex('Joined').del()
  // await knex('Events').del()
  // await knex('Likes').del()
  // await knex('Posts').del()
  await User.deleteAll(); // 
  
  // seed everything in hte right order
  const user = await User.create('cool_cat', '1234');
  await User.create('l33t-guy', '1234');
  await User.create('wowow', '1234');
  

  // console.log(user);

  // await knex('Posts').insert([
  //   {Description: 'ksddjjddjjdj', img_url: 'testurl', Owner_id:user.id, Address: '100103', Category:'Food' }
  // ]);
  
  // await knex('Likes').insert([
  //   { user_id: user.id, post_id: 1}
  // ]);

  // await knex('Events').insert([
  //   { Event_Name: 'local gardener', Description:'kndncjdb', Address:'112i3', img_url:'testurl', Owner_id:user.id}
  // ]);
  // await knex('Joined').insert([
  //   {user_id:user.id, Event_id:1}
  // ]);
};
