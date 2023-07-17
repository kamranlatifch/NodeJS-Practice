const os = require("os");
// console.log(os.arch()); TO check version we ar using

const freeMemory = os.freemem();
// console.log(freeMemory);1384411136
console.log(`${freeMemory / 1024 / 1024 / 1024} GB`);

const totalMem = os.totalmem();
// console.log(totalMem);1384411136
console.log(`${totalMem / 1024 / 1024 / 1024} GB`);

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
