var express = require("express");
var app = express();

// API
// get
// post
// put
// delete

app.get("/", (req, res) => {
  res.send("GET is called from express");
});
app.get("/about", (req, res) => {
  res.send("This is all about Express Learning");
});
//Similarly we can make routes for about,contact etc pages
//in following way we can send data in html formate
app.get("/contact", (req, res) => {
  res.send("<h1>This is all Contact Express Learning</h1>");
}); //it will write send one res.send command to send multiple we will following command
app.get("/temp", (req, res) => {
  res.write("<h1>1:This is all Temp Express Learning</h1>");
  res.write("<h2>2:This is all Temp Express Learning</h2>");
  res.write("<h3>3:This is all Temp Express Learning</h3>");
  //it will keep loading untill we ensure it to stop
  res.send();
});
//to send json following way will be opted
app.get("/users", (req, res) => {
  res.send({
    id: 1,
    name: "Kamran Latif",
  });
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
