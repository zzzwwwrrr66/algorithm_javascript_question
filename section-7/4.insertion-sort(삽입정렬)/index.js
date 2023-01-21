const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
console.log(nums);
// const nums = [ 11, 7, 5, 6, 10, 9 ];
for(let i = 1; i < nums.length; i++) {
  let tmp = nums[i];
  for(let j = i - 1; j >= 0; j--) {
    const currentJ = nums[j];
    if(tmp < currentJ) {
      nums[j+1] = currentJ;
      nums[j] = tmp;
    }
    else {
      break;
    }
  }
}
console.log(nums);


function asd() {

}
