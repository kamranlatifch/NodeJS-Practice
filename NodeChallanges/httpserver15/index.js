//Use of http module
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello From Kamran's Server");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on Port 3000");
});
