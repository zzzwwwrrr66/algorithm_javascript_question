const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

function swap(x,y,arr){
  var t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
  return arr;
}

for(let i = nums.length - 1; i >= 0; i--) {
  console.log("i", i)
  let test = ``;
  for(let j = 0; j < i; j++) {
    test += `${j}`;
    if(nums[j] > nums[j + 1]) {
      // swap(j, j + 1,nums)
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
  console.log("j", test+=`\n-----------`)
}
console.log(nums);