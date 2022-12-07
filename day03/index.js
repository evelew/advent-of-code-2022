const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.txt`, "utf8");

const lines = data.split("\n");
const duplicatedLetters = lines.map((line) => {
  const mid = line.length / 2;
  const left = line.slice(0, mid);
  const right = line.slice(mid);

  const leftLetters = left.split("");
  const rightLetters = right.split("");

  const repeatedLetter = leftLetters.filter((l) => rightLetters.includes(l))[0];

  return repeatedLetter;
});

const lowercaseAlphabet = [...Array(26)].map((_, i) => ({
  [String.fromCharCode(i + 97)]: i + 1,
}));
const uppercaseAlphabet = [...Array(26)].map((_, i) => ({
  [String.fromCharCode(i + 65)]: i + 27,
}));
const alphabetMap = [...lowercaseAlphabet, ...uppercaseAlphabet];

const result = duplicatedLetters.reduce((acc, curr) => {
  const letter = alphabetMap.filter((letter) => {
    return Object.keys(letter)[0] === curr;
  })[0];

  acc += letter[curr];
  return acc;
}, 0);

// part 2
const sliceIntoGroups = (arr, chunkSize = 3) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};
const groups = sliceIntoGroups(lines, 3);

const result2 = groups
  .map((group) => {
    let badge = "";

    const lineArr = group[0].split("");
    lineArr.forEach((letter) => {
      const nextLine = group[1];
      const lastLine = group[2];
      if (!nextLine) return;

      const commonLetterNextLine = nextLine.split("").find((l) => l === letter);
      const commonLetterLastLine = lastLine.split("").find((l) => l === letter);

      if (letter === commonLetterNextLine && letter === commonLetterLastLine) {
        badge = letter;
      }
    });

    return badge;
  })
  .reduce((acc, curr) => {
    const letter = alphabetMap.filter((letter) => {
      return Object.keys(letter)[0] === curr;
    })[0];

    acc += letter[curr];
    return acc;
  }, 0);

// part 2

console.log({ result, result2 });
