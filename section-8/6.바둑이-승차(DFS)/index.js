const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[kg, n], nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

console.log(kg, n, nums);
