const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString() * 1;
function recursion(input) {
  let sum  = input;
  if(input === 1) return 1;

  sum = sum + recursion(input - 1)
  return sum;
}
console.log(recursion(input))