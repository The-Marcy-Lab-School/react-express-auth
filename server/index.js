require('dotenv').config();
const path = require('path');
const express = require('express');

// Middleware imports
const handleCookieSessions = require('./middleware/handleCookieSessions');
const logRoutes = require('./middleware/logRoutes');
const checkAuthentication = require('./middleware/checkAuthentication');

// Controller imports
const authControllers = require('./controllers/authControllers');
const userControllers = require('./controllers/userControllers');
const likeControllers = require('./controllers/likeControllers');
const postControllers = require('./controllers/postControllers');
const feedControllers = require('./controllers/feedControllers');

const app = express();

// Middleware
app.use(handleCookieSessions);
app.use(logRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Auth
app.get('/api/me', authControllers.showMe);
app.post('/api/login', authControllers.loginUser);
app.delete('/api/logout', authControllers.logoutUser);

// User
app.post('/api/users', userControllers.createUser);
app.get('/api/users', checkAuthentication, userControllers.listUsers);
app.get('/api/users/:id', checkAuthentication, userControllers.showUser);
app.patch('/api/users/:id', checkAuthentication, userControllers.updateUser);

// Feed
app.get('/api/feed', feedControllers.loadFeed)

// Post
app.post('/api/posts', checkAuthentication, postControllers.createPost);
app.delete('/api/posts/:post_id',checkAuthentication,postControllers.deletePost)

// Like
app.post('/api/posts/:post_id/like', checkAuthentication, likeControllers.createLike);
app.delete('/api/posts/:post_id/like', checkAuthentication, likeControllers.removeLike);

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));
