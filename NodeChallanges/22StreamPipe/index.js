// we will read input.txt file but in a streaming manner
//same working as lect 21, this pipe will increases the speed
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("input.txt");

  rstream.pipe(res);
  //in this pipe will read with stream from input.txt and write in a file which is response in out case
});

server.listen(3000, "127.0.0.1");
