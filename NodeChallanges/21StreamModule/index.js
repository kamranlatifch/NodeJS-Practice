// we will read input.txt file but in a streaming manner
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //below reading without streaming
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });
  //Below is reading with streaming

  const rstream = fs.createReadStream("input.txt");
  //data,end,error,finish already functions
  rstream.on("data", (chunkData) => {
    res.write(chunkData);
  });
  rstream.on("end", () => {
    res.end();
  });
  rstream.on("error", (err) => {
    console.log(err);
    res.end("file not found");
  });
});

server.listen(3000, "127.0.0.1");
