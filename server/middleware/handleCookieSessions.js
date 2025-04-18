const cookieSession = require('cookie-session');
const handleCookieSessions = cookieSession({
  name: 'session', // this creates a req.session property holding the cookie
  secret: process.env.SESSION_SECRET, // this secret is used to hash the cookie
});

module.exports = handleCookieSessions;