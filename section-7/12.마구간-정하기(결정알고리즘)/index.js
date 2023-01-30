const fs = require('fs');
const { off } = require('process');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, findNum], [...nums]] = fs.readFileSync(path).toString().split("\n").map(v => v.split(" ").map(v=>v*1));
// const xs = nums.sort((a, b)=>a - b);
const xs = [5,6,8,12,14]

let lt = 1;
let rt = Math.max(...xs);
let answer = [];
while (lt <= rt) {
  let mid = Math.floor((lt + rt) / 2);
  let cnt = 1;
  let enp = xs[0];
  // desision (arg = mid) => cnt 
  for(let i = 1; i < xs.length; i++) {
    if (mid <= xs[i] - enp ) {
      cnt++;
      enp = xs[i];
    }
  }

  
  if(cnt < findNum) {
    rt = mid - 1
  } else {
    answer.push(mid);
    lt = mid + 1;
  }
}
console.log(Math.max(...answer));


