const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.txt`, "utf8");

const columns = data.split("\n\n")[0];
const instructions = data.split("\n\n")[1].split("\n");

const mappedInstructions = instructions.map((line) => {
  const quantity = line.split("from")[0].replace("move", "").trim();
  const from = line.split("from")[1].split("to")[0].trim() - 1;
  const to = line.split("from")[1].split("to")[1].trim() - 1;

  return { quantity, from, to };
});

let mappedColumns = [];

// generate columns as matrices
columns
  .split("\n")
  .slice(0, -1)
  .map((line) => line.match(/.{1,4}/g))
  .forEach((line) => {
    line.forEach((char, i) => {
      if (!mappedColumns[i]) mappedColumns[i] = [];

      if (char.trim()) mappedColumns[i].push(char);
    });
  });

// execute instructions
const executeInstructionsPart1 = () =>
  mappedInstructions.forEach((instruction) => {
    const { from, to, quantity } = instruction;

    const charsToMove = mappedColumns[from].splice(0, quantity);
    const updatedColumn = [...charsToMove.reverse(), ...mappedColumns[to]];

    mappedColumns[to] = updatedColumn;
  });

const executeInstructionsPart2 = () =>
  mappedInstructions.forEach((instruction) => {
    const { from, to, quantity } = instruction;

    const charsToMove = mappedColumns[from].splice(0, quantity);
    const updatedColumn = [...charsToMove, ...mappedColumns[to]];

    mappedColumns[to] = updatedColumn;
  });

// executeInstructionsPart1();
executeInstructionsPart2();

const result = mappedColumns
  .map((column) => column[0].replaceAll("[", "").replaceAll("]", "").trim())
  .join("");

console.log(result);
