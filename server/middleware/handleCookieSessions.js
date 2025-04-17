const cookieSession = require('cookie-session');
const handleCookieSessions = cookieSession({
  name: 'session',
  secret: process.env.SESSION_SECRET,
});

module.exports = handleCookieSessions;