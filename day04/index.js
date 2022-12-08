const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.txt`, "utf8");

const groups = data.split("\n");
const elvIds = groups.map((g) => g.split(","));

const result = elvIds.filter((ids) => {
  const elv01Ids = ids[0].split("-");
  const elv02Ids = ids[1].split("-");

  if (
    (Number(elv01Ids[0]) >= Number(elv02Ids[0]) &&
      Number(elv01Ids[1]) <= Number(elv02Ids[1])) ||
    (Number(elv01Ids[0]) <= Number(elv02Ids[0]) &&
      Number(elv01Ids[1]) >= Number(elv02Ids[1]))
  ) {
    return true;
  }
}).length;

const result2 = elvIds.filter((ids) => {
  const elv01Ids = ids[0].split("-");
  const elv02Ids = ids[1].split("-");

  if (
    (Number(elv01Ids[0]) >= Number(elv02Ids[0]) &&
      Number(elv01Ids[1]) <= Number(elv02Ids[1])) ||
    (Number(elv01Ids[0]) <= Number(elv02Ids[0]) &&
      Number(elv01Ids[1]) >= Number(elv02Ids[1])) ||
    (Number(elv01Ids[1]) >= Number(elv02Ids[0]) &&
      Number(elv01Ids[1]) <= Number(elv02Ids[0])) ||
    (Number(elv01Ids[0]) <= Number(elv02Ids[1]) &&
      Number(elv01Ids[1]) >= Number(elv02Ids[0]))
  ) {
    return true;
  }
}).length;

console.log({ result, result2 });
