const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("My Name Is Kamran");
}); //always write before its initialization
event.on("sayMyName", () => {
  console.log("Latif");
});
event.on("sayMyName", () => {
  console.log("Chaudhary");
});
event.emit("sayMyName"); //creating my own event

event.on("checkpage", (sc, msg) => {
  console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkpage", 200, "ok");
