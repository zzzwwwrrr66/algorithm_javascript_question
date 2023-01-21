const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
function swap(x,y,arr){
  var t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
  return arr;
 }
 
for(let i = 0; i < n; i++) {
  let miniNumIdx = i;
  for(let j = i + 1; j < n; j++) {
    if(nums[miniNumIdx] > nums[j]) miniNumIdx = j;
  }
  swap(i, miniNumIdx, nums);
}
console.log(nums);