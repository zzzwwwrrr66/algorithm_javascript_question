const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();

function solution(input) {
  const regex = /[^a-zA-Z]/g;
  input = input.replace(regex, "").toLowerCase();
  let i = input.length;
  let flag = 1;
  for(let j = 0; j < input.length; j++) {
    i--;
    if(input[i] !== input[j]) {
      flag = 0;
      break;
    }    
  }
  return flag ? "YES" : "NO";
}
console.log(
  solution(input)
)

