const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input.shift());
const peple = input.join("").split(" ").map(v=>v*1);
function solution (input) {
  let count = 0;
  let i = 0;
  for(let j = 1; j < N; j++) {
    if(input[i] < input[j]) count++;
    i++
  }
  return count;
}
console.log(
  solution(peple)
);