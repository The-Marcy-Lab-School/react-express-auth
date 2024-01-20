const express = require('express');
const path = require('path');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const router = require('./router');
const logRoutes = require('./middleware/log-routes');
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies, authentication headers, etc.
  optionsSuccessStatus: 204, // Handle preflight requests successfully
};
 

const app = express();
app.use(cors(corsOptions));

app.use(handleCookieSessions); // adds a session property to each request representing the cookie
app.use(logRoutes); // print information about each incoming request
app.use(express.json()); // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve static assets from the public folder

app.use('/api', router);

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the public folder.
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
