const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.txt`, "utf8");

const points = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const extraPoints = {
  lost: 0,
  draw: 3,
  won: 6,
};

const mapOpponent = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const myMap = {
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const opponentLostMap = {
  scissors: "rock",
  rock: "paper",
  paper: "scissors",
};

// part 1
const rounds = data.split("\n").map((item) => item.split(" "));
const result = rounds
  .map((round) => {
    let roundPoints = 0;
    // console.log(myMap[round[1]]);
    // console.log(mapOpponent[round[0]]);
    // console.log(mapOpponent[round[0]]);
    // console.log("----");

    if (myMap[round[1]] === mapOpponent[round[0]]) {
      roundPoints += points[myMap[round[1]]];
      roundPoints += extraPoints["draw"];

      return roundPoints;
    }

    if (myMap[round[1]] === opponentLostMap[mapOpponent[round[0]]]) {
      roundPoints += points[myMap[round[1]]];
      roundPoints += extraPoints["won"];

      return roundPoints;
    }

    if (mapOpponent[round[1]] === opponentLostMap[myMap[round[0]]]) {
      roundPoints += points[myMap[round[1]]];
      roundPoints += extraPoints["lost"];

      return roundPoints;
    }

    return roundPoints;
  })
  .reduce((acc, curr) => (curr += acc), 0);

// part 1

// part 2

const roundResultMap = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const toLost = {
  paper: "rock",
  scissors: "paper",
  rock: "scissors",
};

const result2 = rounds
  .map((round) => {
    let roundPoints = 0;

    if (roundResultMap[round[1]] === "draw") {
      roundPoints += points[mapOpponent[round[0]]];
      roundPoints += extraPoints["draw"];

      return roundPoints;
    }

    if (roundResultMap[round[1]] === "lose") {
      roundPoints += points[toLost[mapOpponent[round[0]]]];
      roundPoints += extraPoints["lost"];
      return roundPoints;
    }

    if (roundResultMap[round[1]] === "win") {
      roundPoints += points[opponentLostMap[mapOpponent[round[0]]]];
      roundPoints += extraPoints["won"];
      return roundPoints;
    }

    return roundPoints;
  })
  .reduce((acc, curr) => (curr += acc), 0);

// part 2

console.log({ result, result2 });
