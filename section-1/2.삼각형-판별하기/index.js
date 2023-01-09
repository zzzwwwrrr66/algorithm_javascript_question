const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split(" ").map(v=>v*1);

const bottom = Math.max(...input);
const bothSum = input.filter(v => v !== bottom).reduce((a, b)=>a+b);

console.time("test");
console.log(bothSum > bottom ? "YES" : "NO");
console.timeEnd("test");