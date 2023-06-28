require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 3000;

server.listen(port, host, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
