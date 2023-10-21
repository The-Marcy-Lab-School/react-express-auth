const express = require('express');
const path = require('path');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const router = require('./router');
const logRoutes = require('./middleware/log-routes');
// import { useContext, useEffect } from 'react';
// import UserContext from './contexts/current-user-context';
// const { setCurrentUser } = useContext(UserContext);
// console.log("curent context", setCurrentUser)


const app = express();
const cors = require("cors");


app.use(handleCookieSessions);  // adds a session property to each request representing the cookie
app.use(logRoutes);       // print information about each incoming request
app.use(express.json());  // parse incoming request bodies as JSON


/////////
app.use(cors({ origin: true }));
//const express = require("express");
// const cors = require("cors");
// app.use(express.json());
//app.use(cors({ origin: true }));

// app.post("/authenticate", async (req, res) => {
//   console.log("axios")
//   const { username } = req.body;
//   return res.json({ username: username, secret: "sha256..." });
// });
const axios = require("axios");

app.post("/s", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  console.log("axios", req.body)
  console.log("axios user", username)
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "54078625-4ad5-4946-88c2-22741b19b57f" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});



////////

app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve static assets from the public folder

app.use('/api', router);

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the public folder.
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
