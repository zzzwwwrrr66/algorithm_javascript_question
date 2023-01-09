const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split("");
const result = input.map(v=>"A" === v ? "#" : v);
console.log(result.join(""));