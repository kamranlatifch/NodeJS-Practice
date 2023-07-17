//Create a folde and name it
//Create a file and data into it
//Add more data by append
//Read data without buffer
//Rename File
//Delete file

const fs = require("fs");
// fs.mkdirSync("Kamran");
//Now new file and relative path convention
fs.writeFileSync("Kamran/bio.txt", "My name is Kamran Latif Ch");
fs.appendFileSync("Kamran/bio.txt", " I am leaning Node.js");

const buf_data = fs.readFileSync("Kamran/bio.txt", "utf-8");

// org_data = buf_data.toString();
// console.log(org_data);
// this method or use of utf-8
console.log(buf_data);
fs.renameSync("Kamran/bio.txt", "Kamran/Mybio.txt");
//now delete all
//1: Deleting each file
fs.unlinkSync("Kamran/Mybio.txt");
//2: Delete the whole folder once for all
fs.rmdirSync("Kamran");
