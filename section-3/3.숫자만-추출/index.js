const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("");

const result = Number(input.filter(v=>-Infinity < v).join(""))
console.log(result);