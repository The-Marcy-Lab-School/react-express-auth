const express = require('express');
const susuController = require('./controllers/susu');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('susu/:id', susuController.show);
Router.get('/susu', susuController.list);

Router.post('/susu', susuController.create);

Router.patch('/susu/:id', susuController.update);

Router.delete('/susu:id', susuController.destroy)

module.exports = Router;
