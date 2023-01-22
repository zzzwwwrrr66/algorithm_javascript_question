const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

console.log(n , nums);

/*
120 1 25 152 130 135 135 143 127 160
3 8 

120 130 150 150 130 150
3 5
 */
const prevNums = [...nums];
const currectNums = nums.sort((a, b)=>a - b)
let answer = ``;
for(let i = 0; i < currectNums.length; i++) {
  if(currectNums.length !== prevNums.length) return;

  if(currectNums[i] !== prevNums[i]) answer+=`${i + 1} `;
}
console.log(answer);