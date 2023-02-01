const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [n , m] = fs.readFileSync(path).toString().split("\n");
const n = 3;
const m = 2;
const input = [3, 6, 9];
const temp = [0, 0];
const answer = [];
function solve(L) {
  if(L === 2) {
    console.log(temp);
    if(temp[0]!==temp[1]) answer.push(temp.slice());
    return;
  } else {
    for(let i = 0; i < input.length; i++) {
      
      temp[L] = input[i]
      solve(L + 1);
    }
  }
}
solve(0);
console.log(answer);