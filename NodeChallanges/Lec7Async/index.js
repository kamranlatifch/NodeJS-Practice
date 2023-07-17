const fs = require("fs");
//if we will use async we must have to call callback else it will throw error
////////////////////////////
// fs.writeFile("read.txt", "Its Async data file", (err) => {
//   console.log("File is created");
// });
/////////////////////////
//to append file

// fs.appendFile("read.txt", "I am appending in asyc file", (err) => {
//   console.log("Task Completed! Data Updated.");
// });
/////////////////////////

//Now to read data
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
