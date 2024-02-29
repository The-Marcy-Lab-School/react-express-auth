/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const events = [
  {
    title: 'Online Yoga!!',
    location: 'Online Class',
    description: `We're gonna be doing some fun yoga for 30 minutes, don't be shy come join!!`,
    date: '2024-02-29T13:00:00Z',
    end_date: '2024-02-29T13:30:00Z',
    CreatedAt: '2024-01-28T08:00:00Z',
    user_id: 1,
  },

  {
    title: 'Intense Cardio',
    location: 'Prospect Park, Brooklyn, NY',
    description: 'Some really intensive cardio, come get your sweat on!!',
    date: '2024-03-29T15:30:00Z',
    end_date: '2024-03-29T16:00:00Z',
    CreatedAt: '2024-01-29T10:00:00Z',
    user_id: 2,
  },

  {
    title: 'Pilates!!!!',
    location: 'Online Class',
    description: `Start your day with pilates in our 45-minute meditation session. Open to all levels.`,
    date: '2024-03-05T12:00:00Z',
    end_date: '2024-03-05T12:45:00Z',
    CreatedAt: '2024-02-20T09:00:00Z',
    user_id: 3,
  },

  {
    title: 'Warrior Bootcamp',
    location: 'Fort Greene Park, Brooklyn, NY',
    description:
      'Gear up for a high-intensity bootcamp designed to push your limits. Bring water and your A-game!',
    date: '2024-03-08T14:00:00Z',
    end_date: '2024-03-08T15:00:00Z',
    CreatedAt: '2024-02-21T11:00:00Z',
    user_id: 4,
  },

  {
    title: 'Community 5K Run',
    location: 'Sunset Park, Brooklyn, NY',
    description:
      'Join us for a community run. All paces welcome! Enjoy a morning of running and community spirit.',
    date: '2024-03-09T13:00:00Z',
    end_date: '2024-03-09T14:30:00Z',
    CreatedAt: '2024-02-25T07:00:00Z',
    user_id: 5,
  },

  {
    title: 'Evening Pilates Class',
    location: 'Online Class',
    description: `Wind down your day with a gentle Pilates session focusing on strength and flexibility. Suitable for all levels.`,
    date: '2024-03-10T20:00:00Z',
    end_date: '2024-03-10T20:50:00Z',
    CreatedAt: '2024-02-27T10:00:00Z',
    user_id: 6,
  },
  {
    title: 'Group coaching session on weight lifting',
    location: 'WNYC Transmitter Park, Brooklyn, NY',
    description: `I will be holding a free coaching session on weight lifting and will provide equipment, come and get educated!!`,
    date: '2024-03-1T20:00:00Z',
    end_date: '2024-03-1T20:50:00Z',
    CreatedAt: '2024-02-27T10:00:00Z',
    user_id: 7,
  },
  {
    title: 'Yoga for a bit come join!',
    location: 'Online Class',
    description: `Quick yoga sesh`,
    date: '2024-02-29T20:00:00Z',
    end_date: '2024-02-29T21:50:00Z',
    CreatedAt: '2024-02-27T10:00:00Z',
    user_id: 4,
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER SEQUENCE events_id_seq RESTART WITH 1');
  await knex('events').del();
  await knex('events').insert(events);
};
