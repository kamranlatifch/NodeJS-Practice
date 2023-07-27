var express = require("express");
var app = express();
const path = require("path");
//hosting my static website
const staticPath = path.join(__dirname, "../public/S-Textiles");

app.use(express.static(staticPath)); //built-in middleware to use static website

app.get("/", (req, res) => {
  res.send("GET is called from express");
});
app.get("/about", (req, res) => {
  res.send("This is all about Express Learning");
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

//we use template engine if we want to play with dynamic data in express js
