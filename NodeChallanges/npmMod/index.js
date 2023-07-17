//npm init
// npm i chalk(it makes clg messages prettier)
const chalk = require("chalk");
console.log(chalk.green.underline.inverse("Success"));
console.log(chalk.red.underline.inverse("false"));

// for validation npm i validator

const validator = require("validator");
const result = validator.isEmail("kami@ch.com");
console.log(
  "Email is",
  result ? chalk.green.inverse(result) : chalk.red.inverse(result)
);
