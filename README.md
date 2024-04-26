# A React+Express with Auth Template

This repo can be used to start a React+Express project fully equipped with Auth for user creation and login.

**Table of Contents**

- [Setup](#setup)
  - [Folder Structure + Package.json Files](#folder-structure--packagejson-files)
  - [Setup Steps](#setup-steps)
- [Back-end](#back-end)
  - [Back-end API](#back-end-api)
  - [Migrations \& Seeds](#migrations--seeds)
  - [User Model](#user-model)
  - [Storing \& Protecting Hashed Passwords](#storing--protecting-hashed-passwords)
  - [The Login Flow](#the-login-flow)
  - [Middleware](#middleware)
- [Authentication \& Authorization](#authentication--authorization)
  - [Cookies](#cookies)
  - [Handle Cookie Sessions](#handle-cookie-sessions)
  - [Check Authentication Middleware](#check-authentication-middleware)
  - [Staying logged in with `GET /api/me`](#staying-logged-in-with-get-apime)
- [Front-end](#front-end)
  - [Example Page Component](#example-page-component)
  - [Adapters](#adapters)
  - [Current User Context](#current-user-context)
- [Deploying](#deploying)
- [Advice](#advice)
  - [Do not trust the front end](#do-not-trust-the-front-end)
  - [Be wary of errors](#be-wary-of-errors)

## Setup

### Folder Structure + Package.json Files

- `frontend/` - the front-end application code (React)
- `server/` - the back-end server application code

Each of these sub-directories has its own `package.json` file with their own dependencies and scripts.

The `package.json` file in the root directory only has scripts for quickly building/running the full project.

### Setup Steps

- First, make sure that you have a new GitHub Organization for your project.
- Select <kbd>Use this template</kbd> and select <kbd>Create a new repository</kbd>. Rename the repo and choose your GitHub organization as the owner. 
- Clone your repo.
- Create a database called `react_auth_example` database (or a name of your choice)
- In the `server/` folder, copy the `.env.template` and name it `.env`.
  - Update the `.env` variables to match your Postgres database information (username, password, database name)
  - Replace the `SESSION_SECRET` value with your own random string. This is used to encrypt the cookie's `userId` value.
- In the root of your project (outside of the `server` and `frontend` folder), run the command `npm run build`. This will build frontend static assets and run migration and seeds on the backend
- To start the server with the built static assets, run `npm start`

During development, you can also use the following commands from the root of the project
- Open a new terminal and run `npm run dev:frontend` to run the frontend development server
- Run `npm run build:frontend` to update the static assets in the frontend.

## Back-end

The back-end is responsible for receiving and responding to client requests. Requests are received by the server, routed to one of the routers, and parsed by the controller. The controller then passes along data from the request to the model to perform CRUD operations on the database before sending a response back to the client.

![](/documentation/readme-img/full-stack-diagram.svg)

### Back-end API

The provided back-end exposes the following API endpoints to access user data in `routers/userRoutes.js` 

| Method | Path           | Description                                  |
| ------ | -------------- | -------------------------------------------- |
| GET    | /api/users     | Get the list of all users                    |
| GET    | /api/users/:id | Get a specific user by id                    |
| POST   | /api/users     | Create a new user                            |
| PATCH  | /api/users/:id | Update the username of a specific user by id |

The provided back-end also exposes the following API endpoints for handling authentication/authorization logic in `routers/authRoutes.js`

| Method | Path        | Description                                        |
| ------ | ----------- | -------------------------------------------------- |
| GET    | /api/me     | Get the current logged in user based on the cookie |
| POST   | /api/login  | Log in to an existing user                         |
| DELETE | /api/logout | Log the current user out                           |

### Migrations & Seeds

Migration files are stored in the `server/db/` folder. This is set by the `knexfile.js` and can be changed if you so choose.

In `server/db/`, you can see the migration file for the `users` table:

```js
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password_hash').notNullable();
    table.timestamps(true, true); // adds the auto-generated created-at and updated-at columns
  })
};
```

The provided migration file will create a `users` table with `id`, `username`, and `password_hash` columns. It will also have auto-generated `created-at` and `updated-at` columns.

The seed file will generate the following data:

![](./documentation/readme-img/users-tableplus.png)

Notice how the passwords have been hashed!

- For an overview of migrations and seeds, [check out these notes](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-7/lesson-8-migrations-and-seeds/notes.md).
- If you need to update these columns, create a new migration file and look into the [alterTable](https://knexjs.org/guide/schema-builder.html#altertable) Knex documentation.
- If creating a new table, create a new migration file and look at the [createTable](https://knexjs.org/guide/schema-builder.html#createtable) documentation.

### User Model

The `User` model (defined in `server/db/models/User.js`) provides static methods for performing CRUD operations with the `users` table in the database:
* `User.list()`
* `User.find(id)`
* `User.findByUsername(username)`
* `User.create(username, password)`
* `User.update(id, username)`
* `User.deleteAll()`

Note that there is both a `User.create()` method AND a `constructor()`. There is also an *instance* method `isValidPassword()`.

Let's look at how these three functions are related.

### Storing & Protecting Hashed Passwords

Rather than storing plaintext passwords in the database (never do this!), we want to store hashed passwords instead.

Check out the `User.create` method in the `User` model

```js
static async create(username, password) {
  // hash the plain-text password using bcrypt before storing it in the database
  const passwordHash = await authUtils.hashPassword(password);

  const query = `INSERT INTO users (username, password_hash)
    VALUES (?, ?) RETURNING *`;
  const { rows } = await knex.raw(query, [username, passwordHash]);
  const user = rows[0];
  return new User(user);
}
```

When we want to create a new user, we take the provided password and pass it to `authUtils.hashPassword`. This function uses `bcrypt` and returns the hassed password which we can safely store in the database.

Notice that when we get the data back from the database, we don't return the new `user`. **We use the `new User()` constructor function** to create a `user` instance and we return that instance. In fact, all of the class methods do this before returning.

Why do this?

Whenever we receive data from the database about a user, it will include the hashed password. We need to send that user's data to the frontend, but we don't want to expose the password, even if it is hashed.

Using the `constructor`  is a clever trick of sorts that takes advantage of the **private instance property** feature of classes. Here is how:
* By wrapping the `user` data from the database in a `new User()` instance, we can make the a private `#passwordHash` property
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

app.use('/api', authRouter); // all requests beginning with /api will be handled by authRouter first
app.use('/api/users', userRouter); // all requests beginning with /api/users will be handled by userRouter
```

- Here, we subdivide the routing between two "sub routers". `app.use` let's us indicate the base URL that each router handles.

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

![](/documentation/readme-img/authorization-diagram.svg)

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
// userRouter.js
userRouter.patch("/users/:id", checkAuthentication, userController.update);
```

### Staying logged in with `GET /api/me`

Cookies are a great way to authorize a user. They can also be used to **authenticate** a user (check to see if they are logged in).

When a user logs in and gets their cookie, that cookie is stored locally across sessions (when the user closes the browser tab and re-opens it).

When the user returns to the site after logging in, they will have a cookie indicating their user id. The server can immediately send back the associated user and automatically log the client in.

![](./documentation/readme-img/authentication-diagram.svg)

## Front-end

The front-end React application's entrypoint is the `index.html` file which loads in the `main.jsx` script. This script renders the top-level `App` component which may render various `page` components. The `adapter` files manage data-fetching logic while `context` files manage global front-end state.

![](/documentation/readme-img/front-end.svg)

### Example Page Component

The `frontend/server/pages/Users.jsx` page provides a clean and simple example of how a front-end page can fetch and then render data from the backend. This page is responsible for fetching and displaying a list of all users in the database:

```jsx
import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
* The `useEffect` hook initiates an asynchronous fetch of all users, making use of the `getAllUsers` helper function from the `adapters/user-adapter` file. When this fetch is complete, `setUsers` will be invoked to re-render the component with the fetched `users`.
* The `users` array is mapped to render a `UserLink` for each user. On the first render, nothing will appear. When the fetch is complete and the component re-renders, we will see all users.

### Adapters

An adapter's sole responsibility is to wrap around the `fetch` logic making it incredibly easy for front-end components to execute a particular type of fetch and utilize the returned data.

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

Any page/component that requires authentication or is responsible for altering authentication also uses this Context:
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

