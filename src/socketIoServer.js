const { Server } = require('socket.io');

const io = new Server(8000, {
  cors: true,
});

module.exports = io;
