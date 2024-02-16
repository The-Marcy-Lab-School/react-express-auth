const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const userController = require('./controllers/user/index'); // the "/index" part of the path is technically not required here, by default, when provided with a folder, the index file will be imported
const eventController = require('./controllers/event/index');
const commentController = require('./controllers/comment/index');
const notificationController = require('./controllers/notification/index')
const addModelsToRequest = require('./middleware/add-models-to-request');
const checkAuthentication = require('./middleware/check-authentication');
const Comment = require('./db/models/comment')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const uploadPath = path.resolve(__dirname, '../frontend/public/upload');
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

const Router = express.Router();
Router.use(addModelsToRequest);

Router.post('/upload', upload.single('file'), (req, res) => {
  const { file } = req;
  console.log(file);
  res.status(200).json(file.filename);
});
Router.delete('/delete/:filename', (req, res) => {
  const filenameToDelete = req.params.filename;
  const filePath = path.resolve(
    __dirname,
    `../frontend/public/upload/${filenameToDelete}`
  );

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ message: 'File not found' });
    }

    // If the file exists, attempt to delete it
    fs.unlink(filePath, (unlinkErr) => {
      if (unlinkErr) {
        return res.status(500).json({ message: 'Error deleting file' });
      }

      res.status(200).json({ message: 'File deleted successfully' });
    });
  });
});

Router.get('/users', userController.list);
Router.post('/users', userController.create);
Router.get('/users/:id', userController.show);
Router.delete('/users/:id', userController.destroyUser);
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
Router.delete('/events/:eventId', eventController.destroyEvent);

Router.get('/comments/:userId', commentController.getCommentsByUser);
Router.get("/notifications/:userId", notificationController.getNotifications)
Router.post('/notifications', notificationController.create)
Router.delete("/notifications/:userId", notificationController.deleteNotifications)
Router.delete("/notifications", notificationController.deleteANotification)

Router.patch('/comments/:commentId/hide', checkAuthentication, async (req, res) => {
  const { commentId } = req.params;
  const success = await Comment.hideComment(commentId);
  if (success) {
    res.json({ message: "Comment hidden successfully." });
  } else {
    res.status(500).json({ error: "Failed to hide the comment." });
  }
});

// These actions require authentication (only valid logged in users can do these things)
// The checkAuthentication middleware will only run for these specified routes.
Router.patch('/users/:id', checkAuthentication, userController.update);
Router.patch(
  '/users/profilePic/:id',
  checkAuthentication,
  userController.patch_pic
);
Router.get('/logged-in-secret', checkAuthentication, (req, res) => {
  res.send({ msg: 'The secret is: there is no secret.' });
});

module.exports = Router;
