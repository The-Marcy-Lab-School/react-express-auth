/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const pictures = {
  'Prospect Park, Brooklyn, NY':
    'https://thumbs.6sqft.com/wp-content/uploads/2017/06/19174904/prospectpark-e1497909025369.jpg',
  'Brooklyn Bridge Park, Brooklyn, NY':
    'https://media.timeout.com/images/105683556/image.jpg',
  'McCarren Park, Brooklyn, NY':
    'https://media.cntraveler.com/photos/5ff637cd1cae1c5896a5f6c3/16:9/w_2560,c_limit/2C7FAW9.jpg',
  'Fort Greene Park, Brooklyn, NY':
    'https://images.ctfassets.net/1aemqu6a6t65/2KQqJk6ZV3Lsld5H8awzVr/871369d06ea46798e42483e22a3c0216/ftgreene23f?w=1200&h=800&q=75',
  'Marine Park, Brooklyn, NY':
    'https://static.nycgovparks.org/images/photo_gallery/full_size/22933.jpg',
  'Sunset Park, Brooklyn, NY':
    'https://images.ctfassets.net/1aemqu6a6t65/3eUGLuY9k4IfQzy4Z6FcEJ/5157b4fb671eb9a46be0af9670df72f5/Sunset-Park-Brooklyn-NYC-Photo-Jordana-Berm__dez.jpg',
  'Domino Park, Brooklyn, NY':
    'https://cdn.vox-cdn.com/thumbor/Hu91h6N8isy3qREZOYHHwPTCspw=/0x0:2000x1333/1200x800/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/59971589/180524_11_38_47_5DSR5465.0.jpg',
  'Brooklyn Heights Promenade Park, Brooklyn, NY':
    'https://www.tclf.org/sites/default/files/styles/crop_2000x700/public/thumbnails/image/NY_NYC_BrooklynHeightsPromenade_WikimediaCommons_2017_01_Hero.jpg?itok=0ESTJznT',
  'Manhattan Beach Park, Brooklyn, NY':
    'https://static.nycgovparks.org/images/photo_gallery/full_size/24748.jpg',
  'WNYC Transmitter Park, Brooklyn, NY':
    'https://transmitterpark.org/wp-content/uploads/2022/09/13-29-04A-1400-xxx_q85-orig.jpg',
  'Owls Head Park, Brooklyn, NY':
    'https://pbs.twimg.com/media/DbtxosvW4AAxuhV.jpg',
  'Bushwich Inlet Park, Brooklyn, NY':
    'https://static.nycgovparks.org/images/photo_gallery/full_size/24722.jpg',
  'Online Class':
    'https://www.billboard.com/wp-content/uploads/2024/01/online-fitness-class-2024-billboard-1548.jpg?w=942&h=623&crop=1',
};

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
    location: 'Central Park, New York, NY',
    description: 'Gear up for a high-intensity bootcamp designed to push your limits. Bring water and your A-game!',
    date: '2024-03-08T14:00:00Z',
    end_date: '2024-03-08T15:00:00Z',
    CreatedAt: '2024-02-21T11:00:00Z',
    user_id: 4,
  },

  {
    title: 'Community 5K Run',
    location: 'Sunset Park, Brooklyn, NY',
    description: 'Join us for a community run. All paces welcome! Enjoy a morning of running and community spirit.',
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
  }
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('ALTER SEQUENCE events_id_seq RESTART WITH 1');
  await knex('events').del();
  await knex('events').insert(events);
};
