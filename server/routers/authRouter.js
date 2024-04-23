const express = require('express');
const authControllers = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.get('/me', authControllers.showMe);
authRouter.post('/login', authControllers.loginUser);
authRouter.delete('/logout', authControllers.logoutUser);

module.exports = authRouter;