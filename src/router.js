const express = require('express');
const userController = require('./controllers/user/index'); // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported
const eventController = require('./controllers/event/index');
const commentController = require('./controllers/comment/index');
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const path = require("path")
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(__dirname, '../frontend/public/upload');
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage })

const Router = express.Router();
Router.use(addModelsToRequest);
Router.post('/upload', upload.single("file"), (req, res) => {
  const file = req.file
  console.log(file)
  res.status(200).json(file.filename)
})
Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
Router.get('/users/events/:userId/signed', eventController.getSignedUpEvents);
Router.get('/users/events/:userId', eventController.getEventsOfUser);

Router.post('/login', userController.login);
Router.delete('/logout', userController.logout);
Router.get('/me', userController.showMe);

Router.get('/events/relations/:eventId', eventController.countAttendees);
Router.get('/events', eventController.getRecentEvents);
Router.get('/events/tags', eventController.getEventsOfTag);
Router.get('/events/:eventId/comments', commentController.getCommentsOnEvent);
Router.post('/events', eventController.postEvent);
Router.post('/events/tags/:eventId', eventController.addTags);
Router.post('/events/:eventId/comments', commentController.postComment);
Router.post('/events/relations/:eventId', eventController.joinEvent);
Router.delete('/events/relations/:eventId', eventController.leaveEvent);

Router.get('/comments/:userId', commentController.getCommentsByUser);

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch('/users/profilePic/:id', checkAuthentication, userController.patch_pic);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
