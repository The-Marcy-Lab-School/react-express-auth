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
//grocery routes
Router.post('/grocerylist/:userId', groceryController.create);
Router.post('/grocerylist/:id/items', groceryController.createItems)
Router.get('/grocerylist/:id', groceryController.list); //get grocery based user id
Router.get('/grocerylist/:id/items', groceryController.listItems); //get items based grocery list id
Router.delete('/grocerylist/:id', groceryController.destroy);
Router.patch('/grocerylist/:id',groceryController.update );

Router.post('/itemslist', itemsController.create);
Router.get('/itemslist', itemsController.list);
Router.delete('/itemslist/:id', itemsController.destroy);
Router.delete('/itemslist/:id',itemsController.deleteItem);// deletes one specific item
Router.patch('/itemslist/:id',itemsController.update );


module.exports = Router;
