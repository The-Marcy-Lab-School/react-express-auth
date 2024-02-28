require('dotenv').config();
const server = require('./server');
const http = require('http');
const { Server } = require('socket.io');
// const io = require('./socketIoServer')

const port = process.env.PORT || 3000;

const httpServer = http.createServer(server);

// Initialize Socket.IO server and attach it to the HTTP server
const io = new Server(httpServer, {
  cors: true,
});

io.on('connection', socket => {
  console.log("socket connections")
  socket.on('join-room', (roomId, userId, username) => {
    socket.join(roomId)
    console.log(`${userId} in ${roomId}`)
    socket.to(roomId).emit('user-connected',userId, username)
    console.log("llllllllllllllll")
    socket.on('message', (message, username) => {
      io.to(roomId).emit('createMessage', message, username)
    })

    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
httpServer.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });


