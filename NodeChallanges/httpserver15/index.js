//Use of http module lec#16
const http = require("http");
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("../UserAPI/userapi.json", "utf-8");
  const objData = JSON.parse(data);

  if (req.url === "/") {
    res.end("Hello From Kamran's Server");
  } else if (req.url === "/about") {
    res.end("Hello From About Us");
  } else if (req.url === "/contact") {
    res.write("Hello From Contact Us");
    res.end();
    //200
  } else if (req.url === "/userapi") {
    // const apiPath = path.join(__dirname, "../UserAPI/userapi.json");

    // fs.readFile("../UserAPI/userapi.json", "utf-8", (err, data) => {
    //   console.log(data);

    //   res.end(data);
    // });
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end("Error:404, Page Not Found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on Port 3000");
});
