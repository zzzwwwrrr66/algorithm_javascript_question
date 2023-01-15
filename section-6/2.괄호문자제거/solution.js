const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();
const inputLocal = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

function solution(input) {
  const stackArr = [];
  for (let val of input) {
    if(val === ")") {
      while(stackArr.pop() !== "(");
    }
    else stackArr.push(val);
  }
  return stackArr;
}

console.log(
  solution(input)
)