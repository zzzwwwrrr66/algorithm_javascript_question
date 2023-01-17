const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();
const inputLocal = "(((()(()()))(())()))(()())"

// 연속적인 ")" 면 1개씩만 추가 
function solution(input) {
  let stack = [];
  let answer = 0;
  let prev = "";
  for(let i = 0; i < input.length; i++) {
    const x = input[i];
    if(prev === ")" && x === ")") {
      answer+= 1;
      prev = x;
      stack.pop();
      continue;
    };
    prev = x;

    if(x === "(") {
      stack.push(x);
    } else if (x === ")") {
      stack.pop();
      answer+=stack.length;
    }
  }

  return answer;
}
console.log(
  solution(input)
)