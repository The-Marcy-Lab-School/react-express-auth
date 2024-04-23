# A React+Express with Auth Template

This repo can be used to start a React+Express project fully equipped with Auth for user creation and login.

**Table of Contents**

- [Setup](#setup)
- [Folder Structure + Package.json Files](#folder-structure--packagejson-files)
- [Back-end](#back-end)
  - [Migrations \& Seeds](#migrations--seeds)
  - [Back-end API](#back-end-api)
  - [Middleware](#middleware)
- [Front-end](#front-end)
  - [Fetching Pattern: \[data, error\]](#fetching-pattern-data-error)
  - [Adapters](#adapters)
  - [Example Page Component](#example-page-component)
- [Authentication \& Authorization](#authentication--authorization)
  - [Cookies](#cookies)
  - [Handle Cookie Sessions](#handle-cookie-sessions)
  - [Staying logged in with `GET /api/me`](#staying-logged-in-with-get-apime)
- [Deploying](#deploying)
- [Advice](#advice)
  - [Do not trust the front end](#do-not-trust-the-front-end)
  - [Be wary of errors](#be-wary-of-errors)

## Setup

- First, make sure that you have a new GitHub Organization for your project.
- Select <kbd>Use this template</kbd> and select <kbd>Create a new repository</kbd>. Rename the repo and choose your GitHub organization as the owner. 
- Clone your repo.
- Create a database called `react_auth_example` database (or a name of your choice)
- In the `server/` folder, copy the `.env.template` and name it `.env`
  - Update the `.env` variables to match your Postgres database information (username, password, database name)
- In the root of your project (outside of the `server` and `frontend` folder), run the command `npm run build`. This will do the following:
  - `cd frontend && npm i && npm run build` - build frontend static assets
  - `cd ../server && npm i && npm run migrate && npm run seed` - run migration and seeds on the backend
- To start the server with the built static assets, run `npm start`

During development, you can also use the following commands
- Open a new terminal and run `npm run dev:frontend` to run the frontend development server
- Run `npm run build:frontend` to update the static assets in the frontend.

## Folder Structure + Package.json Files

- `frontend/` - the front-end application code (React)
- `server/` - the back-end server application code

Each of these sub-directories has its own `package.json` file with their own dependencies and scripts.

The `package.json` file in the root directory only has scripts for quickly building/running the full project.

## Back-end

The back-end is responsible for receiving and responding to client requests. Requests are received by the server, routed by the router, and parsed by the controller. The controller then passes along data from the request to the model to perform CRUD operations on the database before sending a response back to the client.

![](/documentation/readme-img/full-stack-diagram.svg)

### Migrations & Seeds

The `knexfile.js` configuration file changes the location of the migration/seed files to be created in the `server/db/` directory. There, you can see the migration file for the `users` table:

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

### Back-end API

The provided back-end exposes the following API endpoints defined across `routers/userRoutes.js` and `routers/authRoutes.js`

| Method | Path       | Description                                        |
| ------ | ---------- | -------------------------------------------------- |
| GET    | /users     | Get the list of all users                          |
| GET    | /users/:id | Get a specific user by id                          |
| POST   | /users     | Create a new user                                  |
| PATCH  | /users/:id | Update the username of a specific user by id       |
| GET    | /me        | Get the current logged in user based on the cookie |
| POST   | /login     | Log in to an existing user                         |
| DELETE | /logout    | Log the current user out                           |

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

## Front-end

The front-end React application's entrypoint is the `index.html` file which loads in the `main.jsx` script. This script renders the top-level `App` component which may render various `page` components. The `adapter` files manage data-fetching logic while `context` files manage global front-end state.

![](/documentation/readme-img/front-end.svg)

### Fetching Pattern: [data, error]

All of the adapters make use of the `fetchHandler` helper function defined in the `frontend/server/utils.js` file:

```js
export const fetchHandler = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, headers } = response;
    if (!ok) throw new Error(`Fetch failed with status - ${status}`, { cause: status });

    const isJson = (headers.get('content-type') || '').includes('application/json');
    const responseData = await (isJson ? response.json() : response.text());

    return [responseData, null];
  } catch (error) {
    console.warn(error);
    return [null, error];
  }
};
```

This function standardizes the way that fetched data will be packaged and returned by the adapters. This function will ALWAYS return a "tuple" — an array with two values.
* The first value is the fetched `data` (if present)
* The second value is the `error` (if present).

Only one of these two values will ever be present while the other will be `null`. This pattern gives us an easy way to access data (if present) or the error (if present).

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

## Authentication & Authorization

- **authenticated** means "We have confirmed this person is who they say they are"

- **authorized** means "This person is who they say they are AND they are allowed to be here."

So if a user only needs to be logged in to see something, we just check if they're _authenticated_.

However if for example they wanted to update their profile, we'd need to make sure they were _authorized_ to do that (e.g. the profile they're updating is their own).

To achieve this, we'll use cookies.

### Cookies

In the context of computing and the internet, a **cookie** is a small text file that is sent by a website to your web browser and stored on your computer or mobile device.
* When a client sends an initial request to the server, it doesn't have a cookie
* The server sends a response along with a cookie.
* The client can save that cookie and store it on the user's computer (many client-side applications will ask you if you want to save it or not)
* On all future client requests to the server, the cookie will be sent with the request. Because the cookie is saved locally, even if the user closes the application and re-opens it later, the cookie will be sent along with all requests.

![](./documentation/readme-img/cookies.png)

We can use the cookie to save the `id` of the user that was logged in across sessions. If the user was logged in previously, then when we return to the site, the cookie can be checked by the server to automatically log the client in to that user.

The client has NO way of editing the cookie

### Handle Cookie Sessions

In our application, we are using `handleCookieSessions` middleware which uses cookies to store the `userId` of the currently logged-in user in a `req.session` object. If the `req.session.userId` value is missing, then there is not a currently logged in user. If there is a value, then there IS a logged in user.

With this information we can:
1. implement **authentication** (confirm that the user is logged in).
2. implement **authorization** (confirm that the person who is logged in can do what they have requested to do, such as edit their profile)

For example, suppose that a user logs in and then wants to edit their profile. The use of cookie data could look like this:

![](/documentation/readme-img/authorization-diagram.svg)

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

Cookies are a great way to authorize a user. They can also be used to authenticate a user (check to see if they are logged in).

When a user logs in and gets their cookie, that cookie is stored locally across sessions (when the user closes the browser tab and re-opens it).

When the user returns to the site after logging in, they will have a cookie indicating their user id. The server can immediately send back the associated user and automatically log the client in.

![](./documentation/readme-img/authentication-diagram.svg)

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

