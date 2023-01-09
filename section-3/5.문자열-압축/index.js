const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();
let cnt = 0;
let currentWord = input[0];
let result = ``;
for(let i = 0; i <= input.length; i++) {
  if(input[i] !== currentWord) { // input[i] !== input[i + 1] 의 방식도 고안해보면 좋음
    result+=`${currentWord}`;
    if(cnt > 1) result+=`${cnt}`;
    cnt = 1;
    currentWord = input[i];
  } else {
    cnt++;
  }
}
console.log(result);