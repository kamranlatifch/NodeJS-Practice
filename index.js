//REPL
//1: Js Expression
//2:use variables
//3: Multiline code
//4: use (_) to get last result
//5: we can use editor mode
///////////////////////////////////////////
// similar as console of chrome
////Core Modules 5
//creating a new file
const fs = require("fs");
// fs.writeFileSync("read.txt", "Welcome to Kamran's training");
// fs.writeFileSync("read.txt", "Welcome to Kamran's training part 2");
//to add mutiple
// fs.appendFileSync("read.txt", "My overridi");
// fs.appendFileSync("read.txt", "My second overriding");
//TO READ DATA

// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

//Node js includes one more data type called Buffer
//Not available in browser's javascript
//Buffer is mainly used to store binary data
//while reading from a file or receiving packets over the network

// org_data = buf_data.toString();
// console.log(org_data);

//To RENAME THE FINE

// fs.renameSync("read.txt", "readwrite.txt");
