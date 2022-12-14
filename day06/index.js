const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.txt`, "utf8");

const nonRepeatedChars1 = 4;
const nonRepeatedChars2 = 14;

let result = null;

// part 1
// data.split("").forEach((_, i) => {
//   const string = data.slice(i, i + nonRepeatedChars1);
//   const match = string.match(/^(?:([a-z])(?!.*\1)){4}$/);

//   if (match && !result) {
//     result = i + nonRepeatedChars1;
//   }
// });

// part 2
data.split("").forEach((_, i) => {
  const string = data.slice(i, i + nonRepeatedChars2);
  const match = string.match(/^(?:([a-z])(?!.*\1)){14}$/);

  if (match && !result) {
    result = i + nonRepeatedChars2;
  }
});

console.log({ result });
