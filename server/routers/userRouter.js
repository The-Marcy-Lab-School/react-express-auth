const express = require('express');
const userControllers = require('../controllers/userControllers');
const checkAuthentication = require('../middleware/checkAuthentication');

const userRouter = express.Router();

userRouter.get('/', userControllers.listUsers);
userRouter.post('/', userControllers.createUser);
userRouter.get('/:id', userControllers.showUser);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
userRouter.patch('/:id', checkAuthentication, userControllers.updateUser);

module.exports = userRouter;
