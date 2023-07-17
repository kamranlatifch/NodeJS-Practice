const fs = require("fs");
//following is sync
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);
// console.log("after the data");
//following is async
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("after the data");
