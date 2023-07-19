const bioData = {
  name: "Kamran",
  age: 28,
  city: "Lahore",
};
console.log("Simple object is: ", bioData);
//if we want to convert the upper object to json
const jsonData = JSON.stringify(bioData);
console.log("json is: ", jsonData);
//following way we can convert json to object
// const objData = JSON.parse(jsonData);
// console.log("JSON to object is", objData);
console.log("Task starts from here");
//1:Convert obj to json
//2:Make a file and save in it
//3:read from that file
//4:convert to object and show on console
const fs = require("fs");
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("File created!");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(
    "data from json file and converted to object is",
    JSON.parse(data)
  );
});
