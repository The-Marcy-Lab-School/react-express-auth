const User = require('../../models/User');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Step 1: Clear tables
  await knex('symptom_logs').del();
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE symptom_logs_id_seq RESTART WITH 1');
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  // Step 2: Seed 10 users
  const usernames = [
    'cool_cat23',
    'l33t_guy',
    'jane.doe',
    'doctor_avocado',
    'sunny_days',
    'techie123',
    'mellow_vibes',
    'bookworm88',
    'runnergirl',
    'gamer_guy99',
  ];

  const users = [];
  for (let i = 0; i < usernames.length; i++) {
    const newUser = await User.create(usernames[i], 'password123');
    users.push(newUser);
  }

  // Step 3: Seed 10 symptom logs (1 per user)
  const symptomLogs = [
    {
      date: '2025-05-01',
      symptoms: 'Headache and nausea',
      pain_type: 'sharp',
      pain_location: 'forehead',
      pain_level: 5,
      doctor_type: 'Primary Care',
      other_notes: 'Felt worse in the morning',
    },
    {
      date: '2025-05-02',
      symptoms: 'Chest tightness',
      pain_type: 'tightness',
      pain_location: 'chest',
      pain_level: 7,
      doctor_type: 'Cardiologist',
      other_notes: 'After running up stairs',
    },
    {
      date: '2025-05-03',
      symptoms: 'Stomach cramps',
      pain_type: 'aching',
      pain_location: 'lower abdomen',
      pain_level: 4,
      doctor_type: 'Gastroenterologist',
      other_notes: 'Felt after lunch',
    },
    {
      date: '2025-05-03',
      symptoms: 'Sinus pressure',
      pain_type: 'dull',
      pain_location: 'behind eyes',
      pain_level: 3,
      doctor_type: 'Allergist',
      other_notes: 'Allergy season trigger',
    },
    {
      date: '2025-05-03',
      symptoms: 'Back pain',
      pain_type: 'chronic',
      pain_location: 'lower back',
      pain_level: 6,
      doctor_type: 'Physical Therapist',
      other_notes: 'After lifting boxes',
    },
    {
      date: '2025-05-03',
      symptoms: 'Wheezing',
      pain_type: 'tightness',
      pain_location: 'lungs',
      pain_level: 5,
      doctor_type: 'Pulmonologist',
      other_notes: 'After walking stairs',
    },
    {
      date: '2025-05-04',
      symptoms: 'Mild fever',
      pain_type: 'heat',
      pain_location: 'body',
      pain_level: 2,
      doctor_type: 'Primary Care',
      other_notes: 'Ongoing since yesterday',
    },
    {
      date: '2025-05-04',
      symptoms: 'Toothache',
      pain_type: 'sharp',
      pain_location: 'upper molar',
      pain_level: 8,
      doctor_type: 'Dentist',
      other_notes: 'Gets worse at night',
    },
    {
      date: '2025-05-04',
      symptoms: 'Ear ringing',
      pain_type: 'buzzing',
      pain_location: 'left ear',
      pain_level: 3,
      doctor_type: 'ENT',
      other_notes: 'Off and on for two days',
    },
    {
      date: '2025-05-04',
      symptoms: 'Neck stiffness',
      pain_type: 'dull',
      pain_location: 'back of neck',
      pain_level: 4,
      doctor_type: 'Chiropractor',
      other_notes: 'After sleeping wrong',
    },
  ];

  // Step 4: Insert symptom logs
  for (let i = 0; i < users.length; i++) {
    await knex('symptom_logs').insert({
      user_id: users[i].id,
      ...symptomLogs[i],
    });
  }
};
