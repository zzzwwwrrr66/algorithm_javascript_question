const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split(" ");

const words = input[0];
const currentWord = input[1];

let p = 1000;
let result = [];
for(let i = 0; i < words.length; i++) {
  if(words[i] === currentWord) {
    p = 0;
  } else {
    p++;
  }
  result.push(p);
}
for(let i = words.length - 1; i >= 0;i--) {
  if(words[i] === currentWord) {
    p = 0;
  } else {
    p++;
    result[i] = Math.min(result[i], p);
  }
}
console.log(result, result.length);
