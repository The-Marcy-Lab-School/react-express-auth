const express = require('express');
const userController = require('./controllers/user');
const addModels = require('./middleware/add-models');
const checkAuthentication = require('./middleware/check-authentication');
const postController = require('./controllers/post')
const volunteerController = require('./controllers/volunteer')



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


// POST ROUTE

Router.post('/post', postController.create)
Router.get('/post', postController.list)


// VOLUNTEER

Router.post('/volunteer', volunteerController.volunteer)
Router.post('/volunteer', volunteerController.allVolunteer)





Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
