const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim();
const result = new Set(input);
console.log(
  [...result].join("")
);