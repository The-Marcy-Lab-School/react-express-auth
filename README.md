# A React+Express with Auth Template

This repo can be used to start a React+Express project fully equipped with Auth for user creation and login.

**Table of Contents**

- [Setup](#setup)
- [Understanding the Code](#understanding-the-code)
- [Deploying](#deploying)
- [Advice](#advice)

# Setup

- Fork this template repo
- Copy the `.env.template` and name it `.env`
- Create a database called `react_auth_example` database (or update your new `.env` to whatever database you are using)
- Double check that the `.env` variables are all correct (username, password, database name)
- `npm run kickstart` (`npm run dev` or `npm start` afterwards). This will do the following commands all together:
  - `cd front-end && npm i && cd ..` - installs front end dependencies
  - `npm i` - installs all dependencies
  - `npm run migrate` - runs `knex migrate:latest` which will run the provided migration file (look in the `src/db/migrations` folder)
  - `npm run seed` - runs `knex seed:run` which will run the provided seed file (look in `src/db/seeds` folder)
  - `npm run start` - runs `node src/index.js`, starting your server.
- Then, open a new terminal and `cd` into `front-end`. Then run `npm run dev` to start your Vite development server.

The provided migration and seeds file will create a `users` table with `id`, `username`, and `password_hash` columns.

- For an overview of migrations and seeds, [check out these notes](https://github.com/The-Marcy-Lab-School/Fall-2022-Curriculum-BMC/blob/main/se-unit-7/lesson-8-migrations-and-seeds/notes.md).
- If you need to update these columns, consider looking into the [alterTable](https://knexjs.org/guide/schema-builder.html#altertable) Knex documentation.
- If creating a new table, look at the [createTable](https://knexjs.org/guide/schema-builder.html#createtable) documentation.

# Running your application

Run the `npm run dev` command from the root directory to start your Express server.

#### Rebuilding the static assets

The Express server is configured to serve static assets from the `public/` folder. Those static assets are the current **build** of the React front-end found in the `front-end/` folder. You can see the built version of the React front-end by going to the server's address: http://localhost:3000/

In order to update this built version of your React application, you will need to run the `npm run build` command _from the `front-end/` folder_.

#### Working with a dev server

If you would like to work on the front-end without having to constantly rebuild the project, start a Vite dev server by running the `npm run dev` command _from the `front-end/` folder_.

If you look in the `vite.config.js` file, you will see that we've already configured the dev server to proxy any reqeusts made to `/api` to the back-end server.


# Understanding the Code

### Folder Structure

- `front-end/` - the front-end application code (React)
- `public/` - the front-end application's compiled static assets
- `src/` - the back-end server application code

The `package.json` file in the root directory defines the dependencies and scripts for running the back-end server.

The `front-end/package.json` file defines the dependencies and scripts for running the front-end Vite server.

## Front-end

The front-end React application's entrypoint is the `index.html` file which loads in the `main.jsx` script. This script renders the top-level `App` component which may render various `page` components. The `adapter` files manage data-fetching logic while `context` files manage global front-end state.

![](/documentation/readme-img/front-end.svg)

### Fetching Pattern: [data, error]

All of the adapters make use of the `fetchHandlder` helper function defined in the `frontend/src/utils.js` file:

```js
export const fetchHandler = async (url, options = basicFetchOptions) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) return [null, { status: res.status, statusText: res.statusText }];
    if (res.status === 204) return [true, null];

    const data = await res.json();
    return [data, null];
  } catch (error) {
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

The `frontend/src/pages/Users.jsx` page provides a clean and simple example of how a front-end page can fetch and then render data from the backend. This page is responsible for fetching and displaying a list of all users in the database:

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
* The `useEffect` hook initialiates an asynchronous fetch of all users, making use of the `getAllUsers` helper function from the `adapters/user-adapter` file. When this fetch is complete, `setUsers` will be invoked to re-render the component with the fetched `users`.
* The `users` array is mapped to render a `UserLink` for each user. On the first render, nothing will appear. When the fetch is complete and the component re-renders, we will see all users.

## Back-end

The back-end is responsible for receiving and responding to client requests. Requests are received by the server, routed by the router, and parsed by the controller. The controller then passes along data from the request to the model to perform CRUD operations on the database before sending a response back to the client.

![](/documentation/readme-img/full-stack-diagram.svg)

### Back-end API

The provided back-end exposes the following API endpoints defined in `src/routes.js`:

| Method | Path       | Description                                        |
| ------ | ---------- | -------------------------------------------------- |
| GET    | /users     | Get the list of all users                          |
| GET    | /me        | Get the current logged in user based on the cookie |
| GET    | /users/:id | Get a specific user by id                          |
| POST   | /users     | Create a new user                                  |
| POST   | /login     | Log in to an existing user                         |
| PATCH  | /users/:id | Update the username of a specific user by id       |
| DELETE | /logout    | Log the current user out                           |

### Middleware

In `src/server.js` and in `src/routes.js`, various pieces of middleware are used. These pieces of middleware are either provided by `express` or are custom-made and found in the `src/middleware/` folder

**Express Middleware**

```js
app.use(express.json());
```

- We are telling Express to parse incoming data as JSON

```js
app.use(express.static(path.join(__dirname, "..", "public")));
```

- We are telling Express to serve static assets from the `public/` folder

```js
app.use("/api", routes);
```

- `routes` is the Router exported from `src/routes.js`. We are telling Express to send any requests starting with `/api` to that Router.

**Custom Middlware**

```js
app.use(handleCookieSessions);
```

- `handleCookieSessions` adds a `req.session` object to every `req` coming into the server. (see `src/middleware/handle-cookie-sessions`)

```js
Router.use(addModels);
```

- `addModels` adds a `req.db` property to all incoming requests. This is an object containing the models imported from the `db/models/` folder (see `src/middleware/add-model`)

```js
Router.patch("/users/:id", checkAuthentication, userController.update);
```

- `checkAuthentication` verifies that the current user is logged in before processing the request. (see `src/middleware/check-authentication`)
- Here, we specify middleware for a singular route. Only logged-in users should be able to hit this endpoint.

## Authentication & Authorization

- **authenticated** means "We have confirmed this person is who they say they are"

- **authorized** means "This person is who they say they are AND they are allowed to be here."

So if we just want a user to be logged into the site to show content, we just check if they're _authenticated_.

However, if they wanted to update their profile info, we'd need to make sure they were _authorized_ to do that (e.g. the profile they're updating is their own).

### Cookies

In the context of computing and the internet, a **acookie** is a small text file that is sent by a website to your web browser and stored on your computer or mobile device.

**Cookies contain information about your preferences and interactions with the website**, such as login information, shopping cart contents, or browsing history.

When you visit the website again, the server retrieves the information from the cookie to personalize your experience and provide you with relevant content.

### Storing User IDs on the Cookie for Authentication

In our application, we are using cookies to store the `userId` of the currently logged-in user on the `req.session` object. This will allow us to implement **authentication** (confirm that the user is logged in).

The flow of cookie data looks like this:

![](/documentation/readme-img/cookies-session-userid-diagram.svg)

1. When a request comes in for signup/login, the server creates a cookie (the `handle-cookie-sessions` middleware does this for us). That cookie is an object called `session` that is added to each request `req`.
2. The model will store the user data in the database (or look it up for `/login`) and return back the user with it's unique `user.id`
3. When we get the `User` back from the model, we store the `user.id` in that cookie (`session.userId = user.id`)
4. Now, that cookie lives with every request made by that user (`req.session`) and the client can check if it is logged in using the `/api/me` endpoint (see below).

## /api/me

In order to keep source of truth simple, we're going to track who is logged in with that `GET /api/me` convention.

- Each time a page is loaded, we quickly hit `GET /api/me`.
- If there is a logged in user, we'll see that in the json.

The reason this route is used instead of `GET /api/users/:id` is two fold.

1. We don't know the user's `id` on load, so how could we know which `id` to provide in the URL?
2. `GET` REST routes are supposed to be **idempotent** (eye-dem-PO-tent) which means "don't change." `GET /api/me` will change depending on the auth cookie. So, this little example app also has a `GET /api/users/:id` route because `GET /api/me` is not a replacement for it. `GET /api/users:id` isn't used in the client yet but your projects might in the future if you ever want to find a particular user by id (or username)!

# Deploying

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



# Advice

### Do not trust the front end

Remember, **DO NOT TRUST THE FRONT-END**. Validate everything on the server. Just because you write logic to prevent a form from submitting on the front-end doesn't mean a nefarious actor couldn't just pop open a console and make a `fetch` request there. Also, the front-end can be buggy and mistakes can happen.

### Be wary of errors

Given time constraints, this project is handling barely any errors. The model is very brittle right now, the server and sql errors should be handled like we've done before. We're also only handling the most basic of flows and errors on the client. Things like handling attempted recreations of users who already exist or even wrong passwords can be handled much more delicately.

