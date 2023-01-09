const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input[0]);
const scoreSort = input[1].split(" ").map(v=>v*1).sort((a, b) => b - a);
const score = input[1].split(" ");

let obj = {};
for(let i = 0; i < N; i++) {
  obj[`${scoreSort[i]}`] = i + 1;
}
let result = ``;
for(let i = 0; i < N; i++) {
  result+=` ${obj[score[i]]}`;
}
console.log(result.trim());
