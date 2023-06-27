const express = require('express');
const inviteController = require('./controllers/invitation');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const inviteRouter = express.Router();
inviteRouter.use(addModels);

inviteRouter.get('/invites', inviteController.list);
inviteRouter.post('/invites', inviteController.create);
inviteRouter.get('/invites/:id', inviteController.show);
inviteRouter.delete('/invites/:id', inviteController.destroy);

module.exports = inviteRouter;