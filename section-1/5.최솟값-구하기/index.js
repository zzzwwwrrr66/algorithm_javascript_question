const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split(" ").map(v=>v*1);
function resolve(input) {
  if(Array.isArray(input)) return Math.min(...input);
}
console.log(
  resolve(input)
);