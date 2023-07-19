const express = require("express");
const app = express();
const sendMail = require("./sendMail");
app.get("/", (req, res) => {
  res.send("I am server");
});

app.get("/mail", sendMail);

const start = async () => {
  try {
    app.listen(5000, () => {
      console.log("I am live on 5000 port");
    });
  } catch (error) {
    console.log("Error", error);
  }
};
start();
