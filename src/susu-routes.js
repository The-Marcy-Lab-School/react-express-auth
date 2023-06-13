const express = require('express');
const susuController = require('./controllers/susu');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('api/susu/:id', susuController.show);
Router.get('/api/susu', susuController.list);

Router.post('/api/susu', susuController.create);

Router.patch('/api/susu/:id', susuController.update);

Router.delete('/api/susu:id', susuController.destroy)

module.exports = Router;
