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
  - [Interactions between components](#interactions-between-components)
  - [User Model](#user-model)
    - [`User.create()` vs. the `User` constructor](#usercreate-vs-the-user-constructor)
    - [Validating Hashed Passwords](#validating-hashed-passwords)
  - [Controllers and API endpoints](#controllers-and-api-endpoints)
  - [The Login Flow](#the-login-flow)
  - [Middleware](#middleware)
- [Authentication \& Authorization](#authentication--authorization)
  - [Cookies](#cookies)
  - [Handle Cookie Sessions](#handle-cookie-sessions)
  - [Check Authentication Middleware](#check-authentication-middleware)
  - [Staying logged in with `GET /api/me`](#staying-logged-in-with-get-apime)
- [Front-end](#front-end)
  - [Frontend Utils](#frontend-utils)
  - [Adapters](#adapters)
  - [Example Page Component](#example-page-component)
  - [Current User Context](#current-user-context)
- [Deploying](#deploying)
- [Advice](#advice)
  - [Do not trust the front end](#do-not-trust-the-front-end)
  - [Be wary of errors](#be-wary-of-errors)

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

The root of the project also has a `package.json` file for quickly building/running the full project.

### Configure your environment variables

Before you can actually start building, you need to create a database and configure your server to connect with it.

- Create a database with a name of your choice
- In the `server/` folder, copy the `.env.template` and name it `.env`.
  - Update the `.env` variables to match your Postgres database information (username, password, database name)
  - Replace the `SESSION_SECRET` value with your own random string. This is used to encrypt the cookie's `userId` value.
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
# This is used by handleCookieSessions to encrypt your 
SESSION_SECRET='db8c3cffebb2159b46ee38ded600f437ee080f8605510ee360758f6976866e00d603d9b3399341b0cd37dfb8e599fff3'
PG_CONNECTION_STRING=''
```

### Kickstart the project

With everything configured, you can now install dependencies in the `frontend` folder (React, etc...) and in the `server` folder (express, Knex, etc...) and run the provided migrations and seeds. Rather than doing this manually, we made some scripts to help you:
- In the root of your project (outside of the `server` and `frontend` folder), run the command `npm run kickstart`. This will build frontend static assets and run migration and seeds on the backend

Open up your database viewer (like TablePlus) and you should see that the migrations created a `users` table and the seeds populated it with three users!
* Check out the `server/db/seeds/init.js` file to see the users created

During development, you can use the following commands from the root of the project
- To start the server with the built static assets, run `npm start`
- Open a new terminal and run `npm run dev:frontend` to run the frontend development server
- Run `npm run build:frontend` to update the static assets in the frontend.


### You're all set up now. Have Fun!

Below, you will find more information about this repository and how to work with it. Enjoy!

## Database

For this project, you should use a Postgres database. Make sure to set the environment variables for connecting to this database in the `.env` file. These values are loaded into the `knexfile.js` file using the `dotenv` package and the line of code:

```js
require('dotenv').config(); // load the .env file
```

### Migrations

> For an overview of migrations and seeds, [check out these notes](https://github.com/The-Marcy-Lab-School/8-3-2-migrations-seeds).

Migration files are stored in the `server/db/migrations` folder (this location is defined in the `knexfile.js` and can be changed if you so choose)

In `server/db/migrations`, you can see the migration files that generate the `users` table. The first one sets up some initial columns:

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

As you build your project, you will likely want to modify your tables. If this is the case, AVOID using the `migration:rollback`. Instead, *create a new migration that modifies the table*.

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

Notice how the passwords have been hashed! This is because the `User.create` method uses the bcrypt hashing functions in the `server/utils/authUtils` file. If you didn't want to use the `User` model to create these resources, you could hash the passwords manually and then insert the data into the database like so:

```js
// don't forget to import the auth utils so you can hash your own passwords
const authUtils = require('../../utils/auth-utils');

exports.seed = async (knex) => {
  // Before you have models you can always just do `await knex('table_name').del`
  await knex('users').del();

  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');

  const andyPassword = authUtils.hashPassword('andy')
  const bobPassword = authUtils.hashPassword('bob')
  const candicePassword = authUtils.hashPassword('candice')

  await knex('users').insert([
    { username: 'andy', password: andyPassword },
    { username: 'bob', password: bobPassword },
    { username: 'candice', password: candicePassword }
  ])
};
```

## The Server Application

The server is responsible for serving static assets as well as receiving and parsing client requests, getting data from the database, and sending responses back to the client. 

The server is organized into a few key components (from right to left in the diagram below):
* The "Models" found in `server/models/` — responsible for interacting directly with and returning data from the database. In this application, the models will use `knex` to do this.
* The "Controllers" found in `server/controllers/` — responsible for parsing incoming requests, performing necessary server-side logic (like interacting with models), and sending responses.
* The "App" found in `server/index.js` — the hub of the server application, created by Express, that is responsible for defining the endpoint URLs that will be available in the application, and assigning controllers to handle each endpoint. It also configures middleware.

![](./documentation/readme-img/full-stack-diagram.svg)

### Interactions between components

Each one of these components handles a specific task and **together they form a pipeline where each component takes in inputs and produces outputs**. 

As you build your application, seek to understand how these components interact and what each component needs from the others:
* If a user wants to create a new user, they send a `POST` request with a username and password to a particular endpoint defined by the `app`
* The `app` assigns a specific controller to handle this request
* The controller parses the username and password from the request and passes them along to the `User` model.
* The `User` model takes the username and password and executes an `INSERT` SQL statement and returns newly created `user` object back to the controller
* The controller takes the `user` object and sends it back to the client.
* The client now knows that the user was created successfully.

### User Model

As mentioned above, a model is the right-most component of a server application. An application can have many models and each model is responsible for managing interactions with a particular table in a database.

![](./documentation/readme-img/full-stack-diagram.svg)

The `User` model (defined in `server/db/models/User.js`) provides static methods for performing CRUD operations with the `users` table in the database:
* `User.list()`
* `User.find(id)`
* `User.findByUsername(username)`
* `User.create(username, password)`
* `User.update(id, username)`
* `User.deleteAll()`

The controllers that use these methods can import the entire `User` class and then invoke the function that they need.


#### `User.create()` vs. the `User` constructor

Note that there is both a `User.create()` method AND a `constructor()`. There is also an *instance* method `isValidPassword()`.

Let's look at how these three functions are related.

First, the `User` model provides the `User.create` method for creating a new user in the database.

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

When we want to create a new user, we take the provided password and has it using `authUtils.hashPassword()` (which uses `bcrypt` under the hood). Then, we can execute an `INSERT` SQL statement to store the provided username and this hashed password in the database.

> Read about [dynamic queries with `knex.raw()` here](https://github.com/The-Marcy-Lab-School/8-2-2-knex?tab=readme-ov-file#dynamic-queries)

Notice that when we get the data back from the database, we don't return the `rawUserData`. **We use the `new User()` constructor function** to create a `User` instance using that `rawUserData` and we return that instance. In fact, all of the class methods do this before returning.

Why?

#### Validating Hashed Passwords

Whenever we receive data from the database about a user, it will include the hashed password. We need to send that user's data to the frontend, but we don't want to include the password, even if it is hashed.

Using the `constructor` is a clever trick of sorts that takes advantage of the **private instance property** feature of classes. Here is how:
* By wrapping the `rawUserData` data from the database in a `new User()` instance, we can make a private `#passwordHash` property.
* The `#passwordHash` property can't be accessed except by the instance itself.
* If our controller needs to verify the password for a given `User` instance, it can do so using the instance method `isValidPassword` which DOES have access to the private `#passwordHash` property. 
* `isValidPassword` uses the `authUtils.isValidPassword` helper function (which uses `bcrypt.compare()`) to verify provided password against the stored `#passwordHash`

```js
class User {
  // the constructor is used to hide the passwordHash and
  // create an object that can be safely sent to the client
  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
  }

  // this instance method can access the private passwordHash
  isValidPassword = async (password) => (
    authUtils.isValidPassword(password, this.#passwordHash)
  );

  //... other methods...
}
```

### Controllers and API endpoints

The controllers that interact with the `User` model are divided into two files: `userControllers` and `authControllers`. These controller files each export a controller function that are assigned to a particular API endpoint the `app`.

In all, the following API endpoints are provided: 

**User Routes**:

| Method | Path           | Controller                   | Model Method    | Description                                  |
| ------ | -------------- | ---------------------------- | --------------- | -------------------------------------------- |
| GET    | /api/users     | `userControllers.listUsers ` | `User.list()`   | Get the list of all users                    |
| GET    | /api/users/:id | `userControllers.showUser  ` | `User.find()`   | Get a specific user by id                    |
| POST   | /api/users     | `userControllers.createUser` | `User.create()` | Create a new user and set the cookie userId  |
| PATCH  | /api/users/:id | `userControllers.updateUser` | `User.update()` | Update the username of a specific user by id |

**Authentication Routes**:

| Method | Path        | Controller                   | Model Method            | Description                                            |
| ------ | ----------- | ---------------------------- | ----------------------- | ------------------------------------------------------ |
| GET    | /api/me     | `authControllers.showMe`     | `User.find()`           | Get the current logged in user based on the cookie     |
| POST   | /api/login  | `authControllers.loginUser`  | `User.findByUsername()` | Log in to an existing user and set cookie userId value |
| DELETE | /api/logout | `authControllers.logoutUser` | None                    | Log the current user out (delete the cookie)           |

### The Login Flow

So, how are these methods used? Let's look at the login flow. Below is the `loginUser` controller which is executed for the endpoint `POST /api/login`:


```js
exports.loginUser = async (req, res) => {
  const { username, password } = req.body

  // Get a User instance (we can see the username and id but can't see the password)
  const user = await User.findByUsername(username);
  if (!user) return res.sendStatus(404);

  // Use the instance method isValidPassword to verify the password
  const isPasswordValid = await user.isValidPassword(password); // <---
  if (!isPasswordValid) return res.sendStatus(401);

  req.session.userId = user.id; // <-- more on this in a moment...
  res.send(user);
};
```

* First, the `User.findByUsername` function searches for a user in the database with the provided `username`
* The value returned will be a `User` instance (or `null` if not found)
* Next, the provided `password` needs to be verified to see if it matches the password in the database. We can't look at `user.passwordHash` since it is private, but we CAN use the `user.isValidPassword` to verify for us.
* If both the user is found and the password matches, we send the user data to the frontend.

### Middleware

In `server/index.js`, various pieces of middleware are used. These pieces of middleware are either provided by `express` or are custom-made and found in the `server/middleware/` folder

```js
app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Serve static assets from the dist folder of the frontend
```

## Authentication & Authorization

- **authenticated** means "We have confirmed this person is a real user and is allowed to be here"
  - For example, only logged in users can see the other users in this app

- **authorized** means "This person is allowed to perform this protected action"
  - For example, users are only authorized to edit their OWN profile (they can't change someone else's profile)

To implement this functionality, we'll use cookies.

### Cookies

In the context of computing and the internet, a **cookie** is a small text file that is sent by a website to your web browser and stored on your computer or mobile device. Here is how they work:

![](./documentation/readme-img/cookies.png)

* When a client sends an initial request to the server, it doesn't have a cookie
* The server sends a response along with a cookie.
* The client can save that cookie and store it on the user's computer (many client-side applications will ask you if you want to save it or not)
* On all future client requests to the server, the cookie will be sent with the request. Because the cookie is saved locally, even if the user closes the application and re-opens it later, the cookie will be sent along with all requests.

For our purposes, our serve can make a cookie that saves the `id` of the user that is logged in. Whenever the user returns to the site, the cookie can immediately tell us who they are. This can be used to authenticate and to authorize the user.

> WARNING: When the server creates a cookie for the client, it has to be careful with what data is stored in the cookie because the client can manipulate that data and create its own cookies. Always make sure that data stored in a cookie is encrypted!

### Handle Cookie Sessions

In our application, we are using `handleCookieSessions` middleware with our Express server to create cookies (and encrypt data stored on them) for us. We can access/manipulate those cookies by accessing the `req.session` object when handling incoming requests. 

To achieve authentication/authorization, we will store the `userId` of the currently logged-in user in the `req.session` object. For example, this is the `loginUser` controller found in `controllers/authControllers`

```js
exports.loginUser = async (req, res) => {
  const { username, password } = req.body // the req.body value is provided by the client

  const user = await User.findByUsername(username);
  if (!user) return res.sendStatus(404);

  const isPasswordValid = await user.isValidPassword(password);
  if (!isPasswordValid) return res.sendStatus(401);

  req.session.userId = user.id; // here we add the userId to the cookie (req.session)
  res.send(user);
};
```

On future requests, if the `req.session.userId` value is missing, then there is not a currently logged in user. If there is a value, then there IS a logged in user.

With this information we can:
1. implement **authentication** (logging a user in / confirming that the user is already logged in).
2. implement **authorization** (confirm that the person who is logged in can do what they have requested to do, such as edit their profile)

For example, suppose that a user logs in and then wants to edit their profile. The use of cookie data could look like this:

![](./documentation/readme-img/authorization-diagram.svg)

### Check Authentication Middleware

The `checkAuthentication` middleware verifies that the current user is logged in before processing a request. If there is no `userId` in `req.session`, any request that uses this middleware will be rejected with a 401 status code.

```js
// middleware/check-authentication.js
const checkAuthentication = (req, res, next) => {
  // req.session holds the cookie sent by the client (if it had one)
  const { userId } = req.session; 
  if (!userId) return res.sendStatus(401);
  return next();
};
```

For example, only logged-in users should be able to edit their own user profile.

Here, we specify that the `checkAuthentication` middleware should be used for only this one route. 

```js
app.patch('/api/users/:id', checkAuthentication, userControllers.updateUser);
```

### Staying logged in with `GET /api/me`

Cookies are a great way to authorize a user. They can also be used to **authenticate** a user (check to see if they are logged in).

When a user logs in and gets their cookie, that cookie is stored locally across sessions (when the user closes the browser tab and re-opens it).

When the user returns to the site after logging in, they will have a cookie indicating their user id. The server can immediately send back the associated user and automatically log the client in.

![](./documentation/readme-img/authentication-diagram.svg)

## Front-end

A server application can exist on its own but it becomes full-stack when paired with a front-end.

The front-end is responsible for handling user interactions, sending requests to the server application, and rendering content provided by the server.

While it is developed as a React application and `.jsx` files, it will ultimately be built into static assets (HTML, CSS, and JS files that can be sent directly to the browser).

The frontend application is organized into a few key components (from right to left in the diagram below):
* The "Adapters" found in `frontened/src/adapters/` — the front-end equivalent of controllers, responsible for structuring requests sent to the server and for parsing responses.
* The "Pages" found in `frontend/src/pages/` — responsible for rendering separate pages of the front-end application. These components make use of sub-components defined in `frontend/src/components`
* The "App" found in `frontend/src/App.jsx` — the hub of the frontend application, it is the root component that is responsible for defining frontend routes and establishing site-wide layout components (like the navigation bar)

* The `frontend/main.jsx` file actually renders the `App` component and provides access to the `BrowserRouter` and the application's global Context.
* The `index.html` file itself is the entry point of the entire application and it loads the `main.jsx` file and any additional scripts.


![](./documentation/readme-img/front-end.svg)

### Frontend Utils

Let's again start at the right end of the diagram and talk about fetching. Provided in the `frontend/src/utils/fetchingUtils.js` file are a series of helper functions for formatting a fetch request.

The `fetchHandler` function will actually send the `fetch` request, making sure that the response is valid and that the response is in JSON format before parsing. 

If the front-end wants to make a `POST`/`PATCH`/`DELETE` request, an `options` object must be provided. Since these objects are mostly boilerplate, this `fetchingUtils` file also provides helpers for creating those `options` objects. All that you have to do is provide the `body` of the request:


### Adapters

An adapter is another layer of abstraction around the fetching process. Really, they are just helper functions for fetching from a specific server endpoint.

Often, they will be short, like this from the `adapters/user-adapter.js` file:

```js
const baseUrl = '/api/users';

export const getAllUsers = async () => {
  const [users, error] = await fetchHandler(baseUrl);
  if (error) console.log(error); // print the error for simplicity.
  return users || [];
};
```
* A `baseUrl` is defined for all adapters in this `user-adapter` file.
* The `fetchHandler` will return a tuple with either the `users` data or the `error`.
* Here, we print the `error` if it exists but in more robust applications, errors would be handled more gracefully, or they would potentially be returned.
* If `users` exists, we'll return it, otherwise return an empty array (thus ignoring the `error`).

While this code could easily be implemented within the `Users` page component that wants to perform this fetch, by separating this logic out, the `Users` page can be a little bit cleaner. This is immensely valuable as React components can easily become disorganized.

Additionally, if multiple components make use of the same server endpoint, an adapter can be reused without re-writing the same logic.

### Example Page Component

Let's look at that `Users` page component! This page is responsible for fetching and displaying a list of all users in the database:

```jsx
import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  // fetch all users to update the users state above
  useEffect(() => {
    // use the adapter which returns a promise
    // we can avoid using async/await here with this nice one-liner
    getAllUsers().then(setUsers);
  }, []);

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

* The `useState` hook is created to manage the fetched `users`. On the first render, the `users` array will be empty. When the fetch is complete, `users` will hold the fetched users.
* The `useEffect` hook initiates an asynchronous fetch of all users, making use of the `getAllUsers` helper function from the `adapters/user-adapter` file. Notice how we can avoid using the `async`/`await` syntax by using the `.then` syntax to handle the promise. Sometimes `.then` is better! 
* When this fetch is complete, `setUsers` will be invoked to re-render the component with the fetched `users`.
* The `users` array is mapped to render a `UserLink` for each user. On the first render, nothing will appear. When the fetch is complete and the component re-renders, we will see all users.

### Current User Context

The frontend uses a `CurrentUserContext` to provide the entire application with the currently logged in user and a function to set the currently logged in user. 

The first component to use this context is `App` which sets the current user after a successful `GET /api/me` request (the user had a cookie indicating they previously signed in). This is the first thing that happens whenever a user visits the web application.

```js
export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  // ...
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

## Advice

### Do not trust the front end

Remember, **DO NOT TRUST THE FRONT-END**. Validate everything on the server. Just because you write logic to prevent a form from submitting on the front-end doesn't mean a nefarious actor couldn't just pop open a console and make a `fetch` request there. Also, the front-end can be buggy and mistakes can happen.

### Be wary of errors

Given time constraints, this project is handling barely any errors. The model is very brittle right now, the server and sql errors should be handled like we've done before. We're also only handling the most basic of flows and errors on the client. Things like handling attempted recreations of users who already exist or even wrong passwords can be handled much more delicately.

