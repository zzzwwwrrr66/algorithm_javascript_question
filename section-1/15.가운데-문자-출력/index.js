const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim();

function solution (input) {
  if(!input.length) return;

  const isEven = input.length % 2 === 0 ? true : false;
  const middleNumber = isEven 
  ? [Math.floor(input.length / 2) - 1, Math.floor(input.length / 2)] 
  : [Math.floor(input.length / 2)];

  const result = middleNumber.map(currentIndex=>input[currentIndex]).join("");
  return result;
}
console.log(
  solution(input)
)