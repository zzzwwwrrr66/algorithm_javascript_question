const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], ...nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const result = nums.sort((a, b) => {
  if(a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
})
console.log(
  result.map(v => v.join(" ")).join("\n")
);
