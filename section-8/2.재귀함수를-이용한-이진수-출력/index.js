const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[num]] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

function solve(num) {
  const arr  = [];
  function dfs (input) {
    if(input === 0) return;
    dfs(Math.floor(input / 2));
    arr.push(input % 2);
  }
  dfs(num);
  return arr.join("");
}
const result = solve(num);
console.log(result);