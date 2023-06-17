const express = require('express');
const userController = require('./controllers/user');
const groceryController = require('./controllers/grocerylist');
const itemsController = require('./controllers/itemslist');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');

const Router = express.Router();
Router.use(addModels);

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
// We can use middleware slotted in between the route and the controller as well
Router.patch('/users/:id', checkAuthentication, userController.update);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

Router.post('/grocerylist', groceryController.create);
Router.get('/grocerylist', groceryController.list);
Router.delete('/grocerylist/:id', groceryController.destroy);
Router.patch('/grocerylist/:id',groceryController.update );

Router.post('/itemslist', itemsController.create);
Router.get('/itemslist', itemsController.list);
Router.delete('/itemslist/:id', itemsController.destroy);
Router.patch('/itemslist/:id',itemsController.update );

module.exports = Router;
