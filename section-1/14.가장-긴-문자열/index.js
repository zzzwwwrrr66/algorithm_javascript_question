const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");
const N = input.shift();
const result = input.reduce((a, b) => a.length < b.length ? b : a, "");
console.log(result);