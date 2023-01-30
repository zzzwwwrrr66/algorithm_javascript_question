const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[num]] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));


function recursion (input) {
  if(input === 0) return input;
  
  recursion(input - 1);

  console.log(input);
}
recursion(num)