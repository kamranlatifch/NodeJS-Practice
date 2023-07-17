const add = (a, b) => {
  return a + b;
};
const mul = (a, b) => {
  return a * b;
};
const name = "kamran";

// module.exports.add = add;

// module.exports.name = name;
// module.exports.mul = mul;

//We can export all in single line too
module.exports = { add, name, mul };
