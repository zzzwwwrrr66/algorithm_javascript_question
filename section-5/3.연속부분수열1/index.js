const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const [[n, m], [...nums]] = input;
console.log(n, m, nums);




let cnt = 0;
let answerArr = [];

let i = 0;
while (i < nums.length) {
  let sum = nums[i];
  let movingIdx = i + 1;
  if(nums[i] === m) {
    cnt++;
    i++;
  } else {
    if(nums[i] < m) {
      sum = "";
    } else {

    }
  }
  
   

}