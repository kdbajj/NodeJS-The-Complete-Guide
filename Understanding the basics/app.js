//Creating a Node Server

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  //The Node Lifecycle & Event Loop
  process.exit();
});

server.listen(3000);
