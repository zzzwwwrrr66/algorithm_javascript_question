const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const [[n, m], [...nums]] = input;

console.log(nums);

let sum = 0;
let cnt = 0;
let lt = 0;
// rt - lt + 1 === 현재까지의 value 들의 개수 세기
for(let rt = 0; rt < n; rt++) {
  console.log(rt - lt + 1);
}