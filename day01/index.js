const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.txt`, "utf8");

// part 1
const elves = data
  .split(/\n{2,}/g)
  .map((item) =>
    item.split("\n").reduce((acc, item) => (acc += Number(item)), 0)
  )
  .sort((a, b) => b - a);

const elfWithMoreFood = elves[0];
// part 1

// part 2
const sumOfTheThreeElvesWithMoreFood = elves
  .slice(0, 3)
  .reduce((acc, item) => acc + Number(item), 0);
// part 2

console.log({ elfWithMoreFood, sumOfTheThreeElvesWithMoreFood });
