const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
input.shift();



// 동시라는것을 생각하자 
// s , e 서로 다른 index 로 저장 [number, "s" or "e"] 하고 정렬 
// s 면 +1, e 면 -1



const nums = input
.join(" ")
.split(" ")
.map((v, i)=> i % 2 === 0 ? [Number(v), "s"] : [Number(v), "e"])
.sort((a, b) => {
  if(a[0] === b[0]) {
    if(a[1] === "e") {  
      return -1;
    } else {
      return 1;
    }
  }
  return a[0] - b[0]
});

let answer = 0;
let maxPeple = -Infinity;
nums.forEach((v, _) => {
  if(v[1]==="s") {
    answer+= 1
  } else {
    answer-= 1; 
  }
  if(maxPeple < answer) maxPeple = answer;
});

console.log(nums, maxPeple)