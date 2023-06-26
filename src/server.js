const express = require('express');
const path = require('path');
const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const routes = require('./routes');
const logRoutes = require('./middleware/log-routes');
const cors = require('cors')
const app = express();

const corsOptions = {
  origin: '*',
  credentials:true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(handleCookieSessions);
app.use(logRoutes);
// app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes);

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
