const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], ...nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

nums.forEach((v, i)=>{
  console.log(v);
  for(let j = i; j < nums.length; j++) {
    
    console.log("🚀 ~ file: index.js:10 ~ nums.forEach ~ nums[j]", nums[j])
    const currentJ = nums[j];
    // v[1] <= nums[j]
  }
    
})

// (2, 3), (3, 5), (5, 7)