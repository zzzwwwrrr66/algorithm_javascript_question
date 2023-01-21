const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
[1, 2, 3, -3, -2, 5, 6, -6]
function swap(x,y,arr){
  var t = arr[x];
  arr[x] = arr[y];
  arr[y] = t;
  return arr;
}


for(let i = nums.length - 1; i >= 0; i--) {
  console.log("i", i);
  let test = ``;
  for(let j = 0; j < i; j++) {
    test += `${j}`;
    const currentNum = nums[j];
    const nextNum = nums[j + 1];
    if((currentNum < 0 && nextNum < 0) || (currentNum > 0 && nextNum > 0)) {
      continue;
    } 
    if(currentNum > nextNum) {
      [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
  }
  console.log("j", test+=`\n-----------`);
}
console.log(nums);