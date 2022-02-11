const http = require('http');
const port = process.env.PORT || 7002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Danish today is friday!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
