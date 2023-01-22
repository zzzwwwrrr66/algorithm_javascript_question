const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[memoryNum, n], nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
// const nums = [ 1, 2, 3, 2, 6, 2, 3, 5, 7]
// 
// tmp의 자리를 계속 찾아간다 


// j = n - 2;temp = memory[j- 1]; [[memory[j], memory[j + 1]]] = 

/*
1, 2, 3, 2, 6, 2, 3, 5, 7
10000 
21000 
32100 
23100 
62310 
26310 
32610 
53261 
75326
*/

const memory = Array.from({length: 5}, (v, i) => 0);
let answer = ``;
for(let i = 0; i < nums.length; i++) {
  
  const sameIdx = memory.indexOf(nums[i]);
  for(let j = memory.length - 1; j >= 0; j--) {
    if(memory[j - 1] === 0 && memory[j] === 0) continue;
    if(sameIdx > -1 && j > sameIdx) {
      continue;
    } else {
      memory[j] = memory[j - 1];
    }
  }
  memory[0] = nums[i];
  answer+=memory.join("") + "\n";
}
console.log(answer)


