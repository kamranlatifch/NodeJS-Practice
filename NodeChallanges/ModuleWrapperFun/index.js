(function (exports, require, module, __filename, __dirname) {
  const name = "kamran";
  console.log(name);
})(); //This is IEFI(Immediately Invoked Function),Data is always private in it
//Above is is our Module Wrapper Function in which node wrapes our code
const name = "Latif";
console.log(name);
//every file in node js is called module, node wraps our each function in  a module
