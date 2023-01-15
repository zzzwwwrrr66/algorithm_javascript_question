const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();
const inputLocal = "(()(()))(()";

function solution(input) {
  if(input[0] === ")") return false;
  const resultArr = [];
  for(let i = 0; i < input.length; i++) {
    const currentVal = input[i];
    if(currentVal === "(") resultArr.push(input[i]);
    else resultArr.pop();
  }
  return resultArr.length > 0 ? "NO" : "YES";
}

console.log(
  solution(input)
)