# A React+Express with Auth Template

This repo can be used to start a React+Express project fully equipped with Auth for user creation and login.

**Table of Contents**

- [Getting Started](#getting-started)
  - [Create your repo](#create-your-repo)
  - [Getting to know the folder structure](#getting-to-know-the-folder-structure)
  - [Configure your environment variables](#configure-your-environment-variables)
  - [Kickstart the project](#kickstart-the-project)
  - [You're all set up now. Have Fun!](#youre-all-set-up-now-have-fun)
- [Database](#database)
  - [Migrations](#migrations)
    - [Modifying / Adding New Migrations](#modifying--adding-new-migrations)
  - [Seeds](#seeds)
- [The Server Application](#the-server-application)
  - [Server Overview](#server-overview)
  - [Controllers and API endpoints](#controllers-and-api-endpoints)
  - [User Model](#user-model)
    - [`User.create()` vs. the `User` constructor](#usercreate-vs-the-user-constructor)
- [Authentication \& Authorization](#authentication--authorization)
  - [Cookies \& Session Authentication](#cookies--session-authentication)
  - [`req.session` and Handle Cookie Sessions](#reqsession-and-handle-cookie-sessions)
- [Front-end](#front-end)
  - [Frontend Utils](#frontend-utils)
  - [Adapters](#adapters)
  - [Example Page Component](#example-page-component)
  - [Current User Context](#current-user-context)
- [Deploying](#deploying)

## Getting Started

### Create your repo

- First, make sure that you have a new GitHub Organization for your project.
- Select <kbd>Use this template</kbd> and select <kbd>Create a new repository</kbd>. Rename the repo and choose your GitHub organization as the owner. 
- Clone your repo.

### Getting to know the folder structure

In the root of this repository are the two directories you will be building the application in:

- `frontend/` - the front-end application code (React)
- `server/` - the back-end server application code

Each of these sub-directories has its own `package.json` file with its own dependencies and scripts.

The root of the project also has a `package.json` file. It has no dependencies but does include some scripts for quickly getting the project started.

### Configure your environment variables

Before you can actually start building, you need to create a database and configure your server to connect with it.

- Create a database with a name of your choice
- In the `server/` folder, copy the `.env.template` and name it `.env`.
- Update the `.env` variables to match your Postgres database information (username, password, database name)
- Replace the `SESSION_SECRET` value with your own random string. This is used to encrypt the cookie's `userId` value.
  - Use a tool like [https://randomkeygen.com/](https://randomkeygen.com/) to help generate the secret.
- Your `.env` file should look something like this:

```sh
# Replace these variables with your Postgres server information
# These values are used by knexfile.js to connect to your postgres server
PG_HOST='127.0.0.1'
PG_PORT=5432
PG_USER='itsamemario'
PG_PASS='12345'
PG_DB='my_react_express_auth_database'

# Replace session secret with your own random string!
# This is used by handleCookieSessions to hash your cookie data 
SESSION_SECRET='db8c3cffebb2159b46ee38ded600f437ee080f8605510ee360758f6976866e00d603d9b3399341b0cd37dfb8e599fff3'
PG_CONNECTION_STRING=''
```

### Kickstart the project

With everything configured, you can now install dependencies in the `frontend` folder (React, etc...) and in the `server` folder (express, Knex, etc...) and run the provided migrations and seeds:

```sh
# install frontend dependencies and build static assets
cd frontend && npm i && npm run build

# Return to the root
cd ..

# install server dependencies, run migrations and seeds
cd server && npm i && npm run migrate && npm run seed
```

> In the future, you can also run the `npm run kickstart` command which will do all of this for you!

As a result of running the migrations and seeds, you should see that a `users` table has been created and seeded with three users. Check out the `server/db/` folder to see how migrations and seeds were configured.

Finally, split the terminal and `cd` into the `frontend/` application and `server/` application. Then start each application using `npm run dev` in each directory.

### You're all set up now. Have Fun!

Below, you will find more information about this repository and how to work with it. Enjoy!

## Database

> **Chapters in this Section:**
> 
> - [Migrations](#migrations)
>   - [Modifying / Adding New Migrations](#modifying--adding-new-migrations)
> - [Seeds](#seeds)

---

For this project, you should use a Postgres database. Make sure to set the environment variables for connecting to this database in the `.env` file. These values are loaded into the `knexfile.js` file using the `dotenv` package and the line of code:

```js
require('dotenv').config(); // load the .env file
```

### Migrations

> For an overview of migrations and seeds, check out the chapter on [Migrations and Seeds](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-8-backend/10-migrations-and-seeds).

Migration files are stored in the `server/db/migrations` folder. Here, you can see the migration files that generate the `users` table. The first one sets up some initial columns:

```js
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
  })
};
exports.down = (knex) => knex.schema.dropTable('users');
```

This migration file will create a `users` table with an auto-generated and auto-incrementing `id` column, as well as `username` and `password_hash` columns.

#### Modifying / Adding New Migrations

As you build your project, you will likely want to modify your tables. If this is the case, AVOID using the `migration:rollback` unless you are willing to lose all data in your database and re-seed. 

If you wish to keep existing data, you can *create a new migration that modifies the table*.

For example, the second migration file adds some timestamp columns to the existing `users` table.

```js
exports.up = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    // creates two columns: created_at and updated_at
    table.timestamps(true, true);
  })
};

exports.down = (knex) => {
  return knex.schema.alterTable('users', (table) => {
    table.dropColumn('created_at');
    table.dropColumn('updated_at');
  })
};
```

Note that instead of using `knex.schema.createTable`, we are using `.alterTable` since the table already exists. We also use `.alterTable` in the `.down` function to drop the two columns created by `table.timestamps` if we ever did want to roll back these changes.

- For more information, look into the [Knex documentation](https://knexjs.org/guide/schema-builder.html)

### Seeds

Seed files are stored in the `server/db/seeds` folder.

The provided `init.js` seed file uses the `User.create` model method to generate the following data:

![](./documentation/readme-img/users-tableplus.png)

Notice how the passwords have been hashed! This is because the `User.create` method takes care of hashing passwords for us using `bcrypt` (see `server/models/User.js`).

## The Server Application

> **Chapters in this Section:**
> - [Server Overview](#server-overview)
> - [User Model](#user-model)
>   - [`User.create()` vs. the `User` constructor](#usercreate-vs-the-user-constructor)
>   - [Validating Hashed Passwords](#validating-hashed-passwords)
> - [Controllers and API endpoints](#controllers-and-api-endpoints)
> - [The Login Flow](#the-login-flow)
> - [Middleware](#middleware)

---

### Server Overview

The server is responsible for serving static assets as well as receiving and parsing client requests, getting data from the database, and sending responses back to the client. 

![](./documentation/readme-img/full-stack-diagram.svg)

The server is organized into a few key components (from right to left in the diagram):
* The "Models" found in `server/models/`
  * Responsible for interacting directly with and returning data from the database. 
  * In this application, the models will use `knex` to do this.
* The "Controllers" found in `server/controllers/`
  * Responsible for parsing incoming requests, performing necessary server-side logic (like logging requests and interacting using models), and sending responses.
* The "App" found in `server/index.js`
  * The hub of the server application, created by Express.
  * Responsible for defining the endpoint URLs that will be available in the application and assigning controllers to handle each endpoint. 
  * It also configures middleware.

### Controllers and API endpoints

The controllers that interact with the `User` model are divided into two files: `userControllers` and `authControllers`. These controller files each export a controller function that are assigned to a particular API endpoint the `app`.

In all, the following API endpoints are provided: 

**Authentication Routes**:

| Method | Path               | Controller                     | Model Method            | Description                                            |
| ------ | ------------------ | ------------------------------ | ----------------------- | ------------------------------------------------------ |
| POST   | `/api/auth/users`  | `authControllers.registerUser` | `User.create()`         | Create a new user and set the cookie userId            |
| POST   | `/api/auth/login`  | `authControllers.loginUser`    | `User.findByUsername()` | Log in to an existing user and set cookie userId value |
| GET    | `/api/auth/me`     | `authControllers.showMe`       | `User.find()`           | Get the current logged in user based on the cookie     |
| DELETE | `/api/auth/logout` | `authControllers.logoutUser`   | None                    | Log the current user out (delete the cookie)           |

**User Routes**:

| Method | Path           | Controller                   | Model Method    | Description                                  |
| ------ | -------------- | ---------------------------- | --------------- | -------------------------------------------- |
| GET    | /api/users     | `userControllers.listUsers ` | `User.list()`   | Get the list of all users                    |
| GET    | /api/users/:id | `userControllers.showUser  ` | `User.find()`   | Get a specific user by id                    |
| PATCH  | /api/users/:id | `userControllers.updateUser` | `User.update()` | Update the username of a specific user by id |

The server acts as the key middleman between the client / frontend application and the database. To design a server that performs these interactions consistently and predictably, ask yourself:
* What should the server application expect from the frontend?
* What should the server application send back to the frontend?
* What should the database expect from the server?
* What should the database send back to the server?

### User Model

As mentioned above, a model is the right-most component of a server application. An application can have many models and each model is responsible for managing interactions with a particular table in a database.

![](./documentation/readme-img/full-stack-diagram.svg)

The `User` model (defined in `server/db/models/User.js`) provides static methods for performing CRUD operations with the `users` table in the database:
* `User.list()` (get all)
* `User.find(id)` (get one)
* `User.findByUsername(username)` (get one)
* `User.create(username, password)`
* `User.update(id, username)`
* `User.deleteAll()`

Each method is used by one or more controllers.

#### `User.create()` vs. the `User` constructor

Did you notice that there is both a `User.create()` method AND a `constructor()`? Let's see why.

To create a new user in the database, the `User.create()` static method can be invoked with a `username` and `password`. The method hashes the password before inserting it into the database.

```js
static async create(username, password) {
  // hash the plain-text password using bcrypt before storing it in the database
  const passwordHash = await authUtils.hashPassword(password);

  const query = `INSERT INTO users (username, password_hash)
    VALUES (?, ?) RETURNING *`;
  const result = await knex.raw(query, [username, passwordHash]);
  
  // get the first returned row and convert it to a User instance
  // to make the hashed password private
  const rawUserData = result.rows[0];
  return new User(rawUserData);
}
```

`knex.raw` returns the `result` which contains the new user in the first index of the `result.rows` array. As a result, we get something like this:

```json
rawUserData = { 
  "id": 1, 
  "username": "Reuben", 
  "password_hash": "xyzabc123" 
}
```

**But note that we do not just return that newly created user! Before returning the user's data, we construct a `new User` with that data!** 

Why? That `rawUserData` object includes the user's hashed password which we want to keep a secret!

Before returning, we make a `User` instance using the constructor function. The constructor takes in an object with the exact properties of the `user` table in the database and stores the `password_hash` as a private property:

```js
class User {
  #passwordHash = null; // a private property

  // Create a User instance with the password hidden
  // Instances of User can be sent to clients without exposing the password
  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
  }
}
```

Take a look at each `static` method of the `User` class and you'll find that this pattern is repeated: 
1. Data is retrieved from the database (including `password_hash` values)
2. Every user object is converted into a `User` instance to keep the `password_hash` values safely contained within the model.
3. The user objects can then be safely returned and used by the controllers.

## Authentication & Authorization

- **authenticated** means "We have confirmed this person is a real user and is allowed to be here"
  - For example, only logged in users can see the other users in this app

- **authorized** means "This person is allowed to perform this protected action"
  - For example, users are only authorized to edit their OWN profile (they can't change someone else's profile)

To implement this functionality, we'll use cookies.

### Cookies & Session Authentication

In the context of computing and the internet, a **cookie** is a small text file that is sent by a website to your web browser and stored on your computer or mobile device. 

Cookies can be used for many things but for this application we will be using them to keep our user's logged in. This is called **session authentication**. That is, after a user logs in, we will keep them logged in until the session ends (when the cookie is cleared).

Here is cookies they work:

![](./documentation/readme-img/cookies.png)

* *When a client sends an initial request to log in to the server*
  * The client doesn't have a cookie yet. It just sends over the username and password to be **authenticated**.
  * If the credentials are valid, the server creates a cookie encoded with the user's `id`
  * The server sends the cookie along with the response.
  * The client automatically saves the cookie and stores it on the user's computer (many client-side applications may ask you if you want to save cookies or not)
* *On all future client requests*
  * The cookie is automatically sent to the server with each request
  * The existence of a cookie with a user `id` is proof that the client is already **authenticated** and doesn't need to provide their credentials again. The server can just look up the `id` in the cookie to identify the user.

For our purposes, our server can make a cookie that saves the `id` of the user that is logged in. Whenever the user returns to the site, the cookie tells the server which user they are. This can be used to re-authenticate and to authorize the user.

> WARNING: When the server creates a cookie for the client, it has to be careful with what data is stored in the cookie because the client can manipulate that data and create its own cookies.

### `req.session` and Handle Cookie Sessions

So, how do we implement cookies?

When a user logs in to their account, the frontend sends a `POST /api/auth/login` request along with a username and password. The controller validates the inputs, finds the user, validates the password (using the `isValidPassword` instance method!), and then returns the user information: 

```js
// POST /api/auth/login
exports.loginUser = async (req, res) => {
  // Request needs a body
  if (!req.body) {
    return res.status(400).send({ message: 'Username and password required' });
  }

  // Body needs a username and password
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: 'Username and password required' });
  }

  // Username must be valid
  const user = await User.findByUsername(username);
  if (!user) {
    return res.status(404).send({ message: 'User not found.' });
  }

  // Password must match. `user` will be a User instance.
  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) {
    return res.status(401).send({ message: 'Invalid credentials.' });
  }

  // Add the user id to the cookie and send the user data back
  req.session.userId = user.id;
  res.send(user);
};
```

But right before sending the response, there is this peculiar line of code:

```js
req.session.userId = user.id;
```

`req.session` is an object that holds the data we want to include in our cookie. We store the `user.id` value so that when the cookie comes back with future requests, we can know who sent the request by looking at `req.session`

This `req.session` object is created thanks to the `cookie-session` package and our our `handleCookieSessions` middleware:

```js
const cookieSession = require('cookie-session');
const handleCookieSessions = cookieSession({
  name: 'session', // this creates a req.session property holding the cookie
  secret: process.env.SESSION_SECRET, // this secret is used to encode the cookie
});

module.exports = handleCookieSessions;
```

If no cookie exists, this middleware will create a new empty object stored at `req.session`
  * When the response is sent back, it will look at `req.session`, encode the object using the `SESSION_SECRET`, and send the cookie back to the client

If a cookie DOES exist, this middleware will parse the cookie and its data will be added to `req.session`. 

For example, when a user returns to the site, the client automatically sends a request to the `GET /api/auth/me` endpoint which uses this auth controller:

```js
// GET /api/auth/me
exports.showMe = async (req, res) => {
  if (!req.session.userId) return res.sendStatus(401);

  const user = await User.find(req.session.userId);
  res.send(user);
};
```

Without needing to log in again, the `/api/auth/me` endpoint checks to see if a cookie exists, and if it does, fetches the appropriate user!

![The /api/auth/me endpoint can be checked to quickly authenticate a user who has previously logged in.](./documentation/readme-img/authentication-diagram.svg)

You'll also notice this `req.session` value is checked in the `checkAuthentication` middleware which requires a cookie for certain endpoints to be used:

```js
const checkAuthentication = (req, res, next) => {
  const { userId } = req.session;
  if (!userId) return res.sendStatus(401);
  return next();
};
```

`req.session` is also checked to authorize a user to update their profile in the `PATCH /api/users/:id` controller:

```js
/* 
PATCH /api/users/:id
Updates a single user (if found) and only if authorized
*/
exports.updateUser = async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ message: 'New username required.' });
  }

  // A user is only authorized to modify their own user information
  // e.g. User 5 sends a PATCH /api/users/5 request -> success!
  // e.g. User 5 sends a PATCH /api/users/4 request -> 403!
  const userToModify = Number(req.params.id);
  const userRequestingChange = Number(req.session.id);
  if (userRequestingChange !== userToModify) {
    return res.status(403).send({ message: "Unauthorized." });
  }

  const updatedUser = await User.update(userToModify, username);
  if (!updatedUser) {
    return res.status(404).send({ message: 'User not found.' });
  }

  res.send(updatedUser);
};
```

To paint the picture clearly, this is how the cookie is passed back and forth between client and server enabling authorization:

![](./documentation/readme-img/authorization-diagram.svg)

## Front-end

A server application can exist on its own but it becomes full-stack when paired with a front-end.

The front-end is responsible for handling user interactions, sending requests to the server application, and rendering content provided by the server.

While it is developed as a React application and `.jsx` files, it will ultimately be built into static assets (HTML, CSS, and JS files that can be sent directly to the browser).

![](./documentation/readme-img/front-end.svg)

The frontend application is organized into a few key components (from right to left in the diagram):
* The "Adapters" found in `frontend/src/adapters/`
  * Responsible for structuring requests sent to the server and for parsing responses.
  * The front-end equivalent of controllers
* The "Pages" found in `frontend/src/pages/`
  * Responsible for rendering separate pages of the front-end application.  
  * These components make use of sub-components defined in `frontend/src/components`
* The "App" found in `frontend/src/App.jsx`
  * The root component that is responsible for defining frontend routes and establishing site-wide layout components (like the navigation bar)
* The `frontend/main.jsx` file
  * Renders the `App` component
  * Provides access to the `BrowserRouter` and the application's global Context.
* The `index.html` file
  * Loads the `main.jsx` file and any additional scripts.

### Frontend Utils

Let's again start at the right end of the diagram and talk about fetching. Provided in the `frontend/src/utils/fetchingUtils.js` file are a series of helper functions for formatting a fetch request.

The `fetchHandler` function will actually send the `fetch` request, making sure that the response is valid and that the response is in JSON format before parsing. 

If the front-end wants to make a `POST`/`PATCH`/`DELETE` request, an `options` object must be provided. For example, this `options` object for a `POST`:

```js
const options = {
  method: 'POST',
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ someProperty: 'someValue' }),
}
```

Since these objects are mostly boilerplate, there are helpers for creating those `options` objects. For example, the `getPostOptions` function can be used like this

```js
const options = getPostOptions({ username, password }))
```

### Adapters

An adapter is another layer of abstraction around the fetching process. Really, they are just helper functions for fetching from a specific server endpoint.

Often, they will be short, like this from the `adapters/user-adapter.js` file:

```js
const baseUrl = '/api/users';

export const createUser = async ({ username, password }) => {
  return fetchHandler(baseUrl, getPostOptions({ username, password }))
};
```
* A `baseUrl` is defined for all adapters in this `user-adapter` file to simplify building URLs
* The `fetchHandler` will return a `[data, error]` tuple which we can return, passing both values along to the component that uses it. We let the component handle the error.

This separation of concerns keeps our component files a bit cleaner while also allowing multiple components to fetch from the same endpoint if needed.

Errors are handled in the components that use these adapters.

### Example Page Component

Let's look at that `Users` page component! It is a great example of a page component that uses an adapter to fetch data from the server and gracefully handle the response data and error.

```jsx
import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const [data, error] = await getAllUsers();
      if (error) setError(error);
      else if (data) setUsers(data);
    }
    loadUsers();
  }, []);

  if (error) return <p>Sorry, there was a problem loading users. Please try again later.</p>;

  return <>
    <h1>Users</h1>
    <ul>
      {
        users.map((user) => <li key={user.id}><UserLink user={user} /></li>)
      }
    </ul>
  </>;
}
```

Let's break down the component:
* State is created for the `users` and `error` that we expect to get in return from the server when we fetch for users.
* On render, the component uses the `getAllUsers` adapter to fetch the data and set either the `users` state or the `error` state, depending on what is returned.
* The component renders an error message if the `error` state is set.
* Otherwise, the `users` state is mapped into a list of elements and rendered.

### Current User Context

This application uses [**React Context**](https://react.dev/learn/passing-data-deeply-with-context) to share the current logged-in user throughout the entire application. Many pages will need to know if a user is logged in

The frontend uses a `CurrentUserContext` to provide the entire application with the currently logged in user and a function to set the currently logged in user. 

The first component to use this context is `App` which sets the current user after a successful `GET /api/me` request (the user had a cookie indicating they previously signed in). This is the first thing that happens whenever a user visits the web application.

```js
export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    const loadCurrentUser = async () => {
      // we aren't concerned about an error happening here
      const [data] = await checkForLoggedInUser();
      if (data) setCurrentUser(data)
    }
    loadCurrentUser();
  }, [setCurrentUser]);

  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  </>;
}
```

Once the `currentUser` is set in context, it can be used by any page. 

For example, the `pages/Login` page redirects users away from the page if the `currentUser` value is set (we don't want signed-in users to be able to view the login page). It uses the `currentUser.id` value to redirect the user to their specific profile page.

```js
const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

if (currentUser) return <Navigate to={`/users/${currentUser.id}`} />;
```

Below are the pages/components that use the context:
* `components/SiteHeadingAndNav`
  * if a user is logged in show a link to view their own profile and a link to see all users, otherwise show the login/sign up buttons in the nav
* `pages/Login`
  * if a user is already logged in, it navigates back to the home page.
  * otherwise, this page can set the current user after a successful `POST /api/login` request
* `pages/SignUp`
  * if a user is already logged in, it navigates back to the home page.
  * otherwise, this page can set the current user after a successful `POST /api/users` request
* `pages/User`
  * if the currently logged in user matches the current profile page, the user can edit the profile and log out
  * if the user logs out, it sets the current logged in user to `null` before navigating back home.

## Deploying

We recommend deploying using Render.com. It offers free hosting of web servers and PostgreSQL databases with minimal limitations.

Follow the steps below to create a PostgreSQL database hosted by Render and deploy a web application forked from this repository:

1. Make an account on https://render.com/
2. Create a PostgreSQL Server
   - https://dashboard.render.com/ and click on <kbd>New +</kbd>
   - Select PostgreSQL
   - Fill out information for your DB
     - **Region**: `US East (Ohio)`
     - **Instance Type**: Free
   - Select <kbd>Create Database</kbd>
   - Keep the created database page open. You will need the `Internal Database URL` value from this page for step 4
3. Deploy Your Express Server
   - https://dashboard.render.com/ and click on <kbd>New +</kbd>
   - Select <kbd>Web Service</kbd>
   - Connect your GitHub account (if not connected already)
   - Find your repository and select <kbd>Connect</kbd>
   - Fill out the information for your Server
     - **Name**: the name of your app
     - **Region**: `US East (Ohio)` - the important thing is that it matches the PostgreSQL region
     - **Branch**: `main`
     - **Root Directory**: leave this blank
     - **Runtime**: `Node`
     - **Build Command**: `npm build`
     - **Start Command**: `npm start`
     - **Instance Type**: Free
   - Select <kbd>Create Web Service</kbd> (Note: The first build will fail because you need to set up environment variables)
4. Set up environment variables
   - From the Web Service you just created, select <kbd>Environment</kbd> on the left side-menu
   - Under Secret Files, select <kbd>Add Secret File</kbd>
     - **Filename**: `.env`
     - **Contents**:
       - Look at your local `.env` file and copy over the `SESSION_SECRET` variable and value.
       - Add a `PG_CONNECTION_STRING` variable. Its value should be the `Internal Database URL` value from your Postgres page (created in step 2)
       - Add a `NODE_ENV` variable with the value `'production'`
       - The contents should look like this:

        ```env
        SESSION_SECRET='AS12FD42FKJ42FIE3WOIWEUR1283'
        PG_CONNECTION_STRING='postgresql://user:password@host/dbname'
        NODE_ENV='production'
        ```
   - Click <kbd>Save Changes</kbd>

5. Future changes to your code
   - If you followed these steps, your Render server will automatically redeploy whenever the main branch is committed to. To update the deployed application, simply commit to main.
   - For front-end changes, make sure to run `npm run build` to update the contents of the `public/` folder and push those changes.
