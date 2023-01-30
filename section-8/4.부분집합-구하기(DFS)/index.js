const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const num = Number(fs.readFileSync(path).toString().split("").join(""))

const check = [0,0,0,0];
let solve = [];
function dfs(input) {
  if(input > 3) {
    let temp = "";
    for(let i = 1; i < check.length;i++) {
      if(check[i] === 1) {
        temp+=`${i}`;
      }
    }
    solve.push(temp);
    return;
  };
  check[input] = 1;
  dfs(input + 1);
  check[input] = 0;
  dfs(input + 1);
}

dfs(1);
console.log(solve.join("\n"));