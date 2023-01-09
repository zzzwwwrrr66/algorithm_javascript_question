const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split("");
const result = input.filter(v=> v === v.toUpperCase()).length;
console.log(result);