const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input[0]);
const scores = input[1];

function solution (scores) {
  let total = 0;
  let score = 0;
  for(let i = 0; i < N; i++) {
    if(Number(scores[i]) === 1) {
      score = score + 1
      total += score;
    } else {
      score = 0;
    }
  }
  return total;
}

console.log(solution(scores));

