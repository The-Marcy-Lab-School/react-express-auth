const User = require('../models/user');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await User.deleteAll();
  await User.create('cool_cat', '1234', 'https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180240995/95238851-cartoon-cool-guy.jpg', 'i am a cool guy');
  await User.create('l33t-guy', '1234', 'https://hips.hearstapps.com/hmg-prod/images/free-guy-ryan-reynolds-1628082188.jpg?crop=0.529xw:0.353xh;0.237xw,0&resize=1200:*', 'leet guy i am');
  await User.create('wowow', '1234', 'https://as1.ftcdn.net/v2/jpg/05/15/68/02/1000_F_515680231_lFQW9jPedHIy9O5E4dX6vRO8ajpTHMdG.jpg', 'WOW!' );
};
