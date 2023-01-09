const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");
const N = input.shift();
// reduce => no push yes concat if you add Value of Array
const result = input.reduce((a, b) => !a.includes(b) ? a.concat(b) : a , []).join("\n");
console.log(result);