const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const nums_1 = input[1].split(" ").map(v=>v*1)
const nums_2 = input[3].split(" ").map(v=>v*1)
