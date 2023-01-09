const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input[0]);
const A = input[1];
const B = input[2];

function isWin (input) {
  // win A 
  if(input === -2) return "A";
  else if(input === 1) return "A";
  // win B 
  else if(input === 0) return "D";
  // Drow
  else return "B"
}

function solution (N, A, B) {
  const resultArr = [];
  for (let i =0; i < N; i++) {
    const a = Number(A[i]);
    const b = Number(B[i]);
    resultArr.push(isWin(a - b));
  }
  return resultArr.join("\n");
}
console.log(
  solution(N, A, B)
)