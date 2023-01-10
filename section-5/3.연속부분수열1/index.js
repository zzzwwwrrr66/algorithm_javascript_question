const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const [[n, m], [...nums]] = input;
console.log(n, m, nums);




let cnt = 0;
let answerArr = [];
let sum = 0;
let i = 0;
let j = 0;
while (j < nums.length) {
  sum += nums[i];
  if(sum > 6) {
    sum = 0;
    j++;
    i = j;
  } 
  else if(sum === 6) {
    sum = 0;
    cnt++;
    j++;
    i = j;
  } else if(sum < 6) {
    i++;  
  } else {
    j++;
  }
}
console.log(cnt);