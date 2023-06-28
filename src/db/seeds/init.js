const User = require("../models/user");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async (knex) => {
  // await User.deleteAll();
  await User.create(
    "John",
    "Doe",
    25,
    "male",
    "Caucasian",
    "English",
    "johndoe123",
    "hashed_password_123",
    "john.doe@example.com",
    ''
  );
  await User.create(
    "Jane",
    "Doe",
    23,
    "Female",
    "African American",
    "Jamaican",
    "janesmith456",
    "hashed_password_456",
    "jane.smith@example.com",
    ''
  );
  await User.create(
    "Michael",
    "Johnson",
    89,
    "Male",
    "Asian",
    "Chinese",
    "michaelj88",
    "hashed_password_789",
    "michael.johnson@example.com",
    ''
  );
  await User.create(
    "Emily",
    "Davis",
    35,
    "Female",
    "Asian",
    "Korean",
    "emilydavis35",
    "hashed_myPassword123",
    "emilydavis35@gmail.com",
    ''
  );
  await User.create(
    "David",
    "Gonzalez",
    45,
    "Male",
    "Hispanic",
    "Mexican",
    "davidgonzalez45",
    "hashed_qwerty123",
    "davidgonzalez45@yahoo.com",
    ''
  );
  await User.create(
    "Sophia",
    "Lee",
    26,
    "Female",
    "Asian",
    "Chinese",
    "sophialee26",
    "hashed_password123",
    "sophialee26@hotmail.com",
    ''
  );
  await User.create(
    "James",
    "Taylor",
    50,
    "Male",
    "Black",
    "African American",
    "jamestaylor50",
    "hashed_ilovecoding",
    "jamestaylor50@gmail.com",
    ''
  );
  await User.create(
    "Emma",
    "Lopez",
    32,
    "Female",
    "Hispanic",
    "Mexican",
    "emmalopez32",
    "hashed_mySecretPassword",
    "emmalopez32@yahoo.com",
    ''
  );
  await User.create(
    "Daniel",
    "Chen",
    42,
    "Male",
    "Asian",
    "Chinese",
    "danielchen42",
    "hashed_securepass123",
    "danielchen42@hotmail.com",
    ''
  );
  await User.create(
    "Olivia",
    "Nguyen",
    29,
    "Female",
    "Asian",
    "Vietnamese",
    "olivianguyen29",
    "hashed_qwertyuiop",
    "olivianguyen29@gmail.com",
    ''
  );
  await User.create(
    "Christopher",
    "Kim",
    38,
    "Male",
    "Asian",
    "Korean",
    "christopherkim38",
    "hashed_myp@ssw0rd",
    "christopherkim38@yahoo.com",
    ''
  );
  await User.create(
    "Ava",
    "Wang",
    31,
    "Female",
    "Asian",
    "Chinese",
    "avawang31",
    "hashed_password456",
    "avawang31@hotmail.com",
    ''
  );
  await User.create(
    "Matthew",
    "Martinez",
    47,
    "Male",
    "Hispanic",
    "Mexican",
    "matthewmartinez47",
    "hashed_12345678",
    "matthewmartinez47@gmail.com",
    ''
  );
  await User.create(
    "Isabella",
    "Garcia",
    24,
    "Female",
    "Hispanic",
    "Puerto Rican",
    "isabellagarcia24",
    "hashed_passw0rd!",
    "isabellagarcia24@yahoo.com",
    ''
  );
  await User.create(
    "Andrew",
    "Liu",
    39,
    "Male",
    "Asian",
    "Chinese",
    "andrewliu39",
    "hashed_password789",
    "andrewliu39@hotmail.com",
    ''
  );
  await User.create(
    "Mia",
    "Hernandez",
    27,
    "Female",
    "Hispanic",
    "Mexican",
    "miahernandez27",
    "hashed_myP@ssw0rd",
    "miahernandez27@gmail.com",
    ''
  );
  await User.create(
    "Joseph",
    "Kim",
    36,
    "Male",
    "Asian",
    "Korean",
    "josephkim36",
    "hashed_passw0rd",
    "josephkim36@yahoo.com",
    ''
  );
  await User.create(
    "Charlotte",
    "Chang",
    30,
    "Female",
    "Asian",
    "Chinese",
    "charlottechang30",
    "hashed_1234567890",
    "charlottechang30@hotmail.com",
    ''
  );
  await User.create(
    "William",
    "Gonzalez",
    42,
    "Male",
    "Hispanic",
    "Puerto Rican",
    "williamgonzalez42",
    "hashed_password1234",
    "williamgonzalez42@gmail.com",
    ''
  );
  await User.create(
    "Amelia",
    "Kaur",
    25,
    "Female",
    "Asian",
    "Indian",
    "ameliakaur25",
    "hashed_securepassword",
    "ameliakaur25@yahoo.com",
    ''
  );
  await User.create(
    "Benjamin",
    "Nguyen",
    33,
    "Male",
    "Asian",
    "Vietnamese",
    "benjaminnguyen33",
    "hashed_password5678",
    "benjaminnguyen33@hotmail.com",
    ''
  );
  await User.create(
    "Sofia",
    "Ramos",
    29,
    "Female",
    "Hispanic",
    "Mexican",
    "sofiaramos29",
    "hashed_mysecret123",
    "sofiaramos29@gmail.com",
    ''
  );
  await User.create(
    "Daniel",
    "Chen",
    43,
    "Male",
    "Asian",
    "Chinese",
    "danielchen43",
    "hashed_pass123456",
    "danielchen43@yahoo.com",
    ''
  );
  await User.create(
    "Sarah",
    "Johnson",
    37,
    "Female",
    "Black",
    "African American",
    "sarahjohnson37",
    "hashed_securepass456",
    "sarahjohnson37@hotmail.com",
    ''
  );
  await User.create(
    "Christopher",
    "Garcia",
    29,
    "Male",
    "Hispanic",
    "Mexican",
    "christophergarcia29",
    "hashed_qwerty5678",
    "christophergarcia29@gmail.com",
    ''
  );
  await User.create(
    "Olivia",
    "Brown",
    31,
    "Female",
    "Black",
    "African American",
    "oliviabrown31",
    "hashed_password7890",
    "oliviabrown31@yahoo.com",
    ''
  );
  await User.create(
    "Daniel",
    "Lopez",
    33,
    "Male",
    "Hispanic",
    "Puerto Rican",
    "daniellopez33",
    "hashed_myp@ssw0rd",
    "daniellopez33@hotmail.com",
    ''
  );
  await User.create(
    "Sophia",
    "Walker",
    25,
    "Female",
    "Black",
    "African American",
    "sophiawalker25",
    "hashed_password1234",
    "sophiawalker25@gmail.com",
    ''
  );
  await User.create(
    "Ethan",
    "Martinez",
    39,
    "Male",
    "Hispanic",
    "Mexican",
    "ethanmartinez39",
    "hashed_ilovecoding123",
    "ethanmartinez39@yahoo.com",
    ''
  );
  await User.create(
    "Emily",
    "Brown",
    28,
    "Female",
    "Black",
    "African American",
    "emilybrown28",
    "hashed_passw0rd!",
    "emilybrown28@hotmail.com",
    ''
  );
  await User.create(
    "Alexander",
    "Torres",
    47,
    "Male",
    "Hispanic",
    "Puerto Rican",
    "alexandertorres47",
    "hashed_qwertyuiop",
    "alexandertorres47@gmail.com",
    ''
  );
};

//
