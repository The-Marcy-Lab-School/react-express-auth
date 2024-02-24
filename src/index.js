require('dotenv').config();
const server = require('./server');
const io = require('./socketIoServer')

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const emailToSocketIdMap = new Map()
const socketidToEmailMap = new Map()

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId, username) => {
    socket.join(roomId)
    console.log(`${userId} in ${roomId}`)
    socket.to(roomId).emit('user-connected',userId, username)
    
    socket.on('message', (message, username) => {
      io.to(roomId).emit('createMessage', message, username)
    })
    socket.on('video-state-change', (roomId, userId, videoEnabled) => {
      // Broadcast video state change to all users in the room except the sender
      io.to(roomId).emit('video-state-changed', userId, videoEnabled);
  });
    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})