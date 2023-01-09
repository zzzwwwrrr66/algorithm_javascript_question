// 삼각형의 양쪽 선이 맨아래 선보다 커야 삼각형을 만들수 있다 

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split("\n");
const N = input.shift();
const numbers = input.join("").split(" ").map(v=>v*1);
const firstNum = numbers.shift();
function solution(input) {
  console.log(input);

  let i = 0;
  let j = 1;
  const resultArr = [];
  while(i < input.length) {
    if(input[j] === undefined) {
      resultArr.push(input[i]);
      break;
    };
    
    if(input[i] > input[j]) resultArr.push(input[i]);
    else resultArr.push(input[j]);
    i = i + 2;
    j = j + 2;
  }
  console.log(resultArr);
}
solution(numbers);