const fs = require('fs');
const { deflateSync } = require('zlib');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[kg, n], ...nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const input = nums.flat();
let max = 0;
function dfs(l, sum) {
  if(l === input.length) {
    console.log(sum);
    if(kg >= sum && max < sum) {
      max = sum;
    }
    return;
  }
  dfs(l + 1, sum + input[l]);
  dfs(l + 1, sum);
  // left dfs(l + 1, sum + input[l]);
  // right dfs(l + 1, sum);
}
dfs(0, 0);
console.log("max", max);