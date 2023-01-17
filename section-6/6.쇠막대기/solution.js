const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();
const inputLocal = "()(((()())(())()))(())";
// 연속적인 ")" 면 1개만 추가 
function solution() {
  let stack = [];
  let answer = 0;
  for(let x of input) {
    if(x === "(") {
      console.log(x);
      stack.push(x);
    } else if (x === ")") {
      stack.pop();
      answer+=stack.length;
    }
  }

  return answer;
}
console.log(
  solution(inputLocal)
)

