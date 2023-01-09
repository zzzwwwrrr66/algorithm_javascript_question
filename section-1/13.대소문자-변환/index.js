const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split("");
const result = input.map(v=>v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join("");
console.log(result);