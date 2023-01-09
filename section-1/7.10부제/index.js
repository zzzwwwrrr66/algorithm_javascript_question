const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const date = input.shift() * 1;
const cars = input.join(" ").split(" ").map(v=>v*1);
const result = cars.filter(v=>v % 10 === date).length;
console.log(result)

