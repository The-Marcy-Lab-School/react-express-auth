const express = require('express');
const authControllers = require('../controllers/authControllers');
const checkAuthentication = require('../middleware/checkAuthentication')

const authRouter = express.Router();

authRouter.get('/me', authControllers.showMe);
authRouter.post('/login', authControllers.loginUser);
authRouter.delete('/logout', authControllers.logoutUser);

authRouter.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = authRouter;