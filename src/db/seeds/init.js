const User = require('../models/user');
const Event = require('../models/event');
const UserEvent = require('../models/user_event');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Users
  await User.deleteAll();
  await User.create(
    "Jason",
    "Paulino",
    "jasonpaulino",
    "jasonp0830@gmail.com",
    "123",
  );
  await User.create(
    "Randy",
    "Pichardo",
    "randypichardo",
    "randypichardo1987@gmail.com",
    "123",
  );
  await User.create(
    "Staceyann",
    "King",
    "staceyannking",
    "staceyannking01@gmail.com",
    "123",
  );
  await User.create(
    "Magdalena",
    "Gero",
    "magdalenagero",
    "magdalenamgero@gmail.com",
    "123",
  );
  await User.create(
    "Shaina",
    "Guzman",
    "shainaguzman",
    "shainaguzman0624@gmail.com",
    "123",
  );

  // Events
  await Event.deleteAll();
  await Event.create({
    organizer_id: 1,
    type: "Cleanup",
    title: "Park Cleanup",
    start_date: new Date(2023, 6, 12), // July 12, 2023
    end_date: new Date(2023, 6, 12), // July 12, 2023
    start_time: "10:00:00", // 10 AM
    end_time: "14:00:00", // 2 PM
    location: "Central Park",
    borough: "Manhattan",
    description:
      "Join us for a cleanup event at Central Park. Bring your friends!",
    image: "https://example.com/images/cleanup.jpg",
  });
  await Event.create({
    organizer_id: 1,
    type: "Exchange",
    title: "Book Exchange",
    start_date: new Date(2023, 6, 20), // July 20, 2023
    end_date: new Date(2023, 6, 21), // July 21, 2023
    start_time: "15:00:00", // 3 PM
    end_time: "19:00:00", // 7 PM
    location: "Brooklyn Library",
    borough: "Brooklyn",
    description:
      "Join us for a book exchange event at Brooklyn Library. Bring books you'd like to swap!",
    image: "https://example.com/images/book_exchange.jpg",
  });

  // User Events
  await UserEvent.deleteAll();
  await UserEvent.create(2, 1); // User 2 joins Event 1
  await UserEvent.create(3, 1); // User 3 joins Event 1
  await UserEvent.create(4, 2); // User 4 joins Event 2
  await UserEvent.create(5, 2); // User 5 joins Event 2
};
