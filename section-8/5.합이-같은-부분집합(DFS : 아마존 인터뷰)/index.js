const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

console.log(n, nums);
// const nums = [1,3,5,6,7,10]
const bucket = [0, 0, 0, 0, 0, 0];
const buckets = [];
let result = "NO";
function solve (l, sum) {
  if(l === nums.length) {
    let total = nums.reduce((a, b)=>a + b);
    buckets.push([sum, total - sum]);
    if(sum - (total - sum) === 0) result = "YES";
    return;
  }

  // left => currentVal sum 함, right => currentVal sum 안함
  
  solve(l + 1, sum + nums[l])
  solve(l + 1, sum);
}
solve(0 , 0);
console.log(result, buckets,buckets.length);
