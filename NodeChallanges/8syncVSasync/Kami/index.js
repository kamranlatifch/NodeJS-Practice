const fs = require("fs");
// fs.appendFile("bio.txt", " I am Learning Node. :) ", (err) => {
//   console.log("Data Updated in File");
// });

// fs.readFile("bio.txt", "utf-8", (err, data) => {
//   console.log(data);
// });

// fs.rename("bio.txt", "myBio.txt", (err) => {
//   console.log("Name Updated");
// });

fs.unlink("myBio.txt", (err) => {
  console.log("File is Deleted.");
});
//similarly we can delete directory or folder
