const { hashPassword } = require('../../utils/auth-utils');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await knex('users').del();

  const usersData = [
    { username: 'cool_cat', password_hash: await hashPassword('1234'), profile_image: 'https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180240995/95238851-cartoon-cool-guy.jpg', bio: 'i am a cool guy' },
    { username: 'l33t-guy', password_hash: await hashPassword('1234'), profile_image: 'https://hips.hearstapps.com/hmg-prod/images/free-guy-ryan-reynolds-1628082188.jpg?crop=0.529xw:0.353xh;0.237xw,0&resize=1200:*', bio: 'leet guy i am' },
    { username: 'wowow', password_hash: await hashPassword('1234'), profile_image: 'https://as1.ftcdn.net/v2/jpg/05/15/68/02/1000_F_515680231_lFQW9jPedHIy9O5E4dX6vRO8ajpTHMdG.jpg', bio: 'WOW!' },
    { username: 'default-user', password_hash: await hashPassword('1234') },
  ];

  await knex.table('users').insert(usersData);
};
