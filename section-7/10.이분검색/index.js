const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [[n, findNum], [...nums]] = fs.readFileSync(path).toString().split("\n").map(v => v.split(" ").map(v=>v*1));

// console.log(n, findNum, nums);

const findNum = 32;
const nums = [23, 87, 65, 12,57, 32, 99, 81].sort((a, b)=>a - b);
let input = nums;
let lt = 0;
let rt = nums.length - 1;
let answer;
let mid;
while (lt <= rt) {
  mid = Math.floor((lt + rt) / 2);
  const midNum = input[mid]
  if(findNum === midNum) {
    answer = mid + 1;
    break;
  }
  
  if(midNum > findNum) {
    rt = mid - 1;
  } else {
    lt = mid + 1;
  }
  
}
console.log(input, mid, answer)
// console.log(mid, nums[mid], answer);
/*
- lt, rt, mid( Math.floor(lt + rt / 2) )
- 찾는 숫자가 mid 보다 크면  rt = mid + 1; 작으면 lt = mid - 1;
*/

