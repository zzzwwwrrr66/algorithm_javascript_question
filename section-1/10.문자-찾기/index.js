const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split("\n");
const findWord = input.pop();
const words = input.join(" ").split("");

const result = words.filter(v => v===findWord).length
console.log(result);


