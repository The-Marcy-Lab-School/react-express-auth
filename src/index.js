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
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    console.log(`${userId} in ${roomId}`)
    socket.to(roomId).emit('user-connected',userId)
    
    socket.on('message', message => {
      io.to(roomId).emit('createMessage', message)
    })
    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})