const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n")
const [S, T] = input;

function hashCount (string) {
  const obj = {};
  const leng = string.length;
  for(let i = 0; i < leng; i++) {
    if(!obj[string[i]]) obj[string[i]] = 0;
    obj[string[i]]++;
  }
  return obj
}

function solution (input) {
let cnt = 0;
let hashCnt = {}
let j = 0;
let result = [];
for(let i = 0; i < S.length; i++) {
if(input[S[i]]) {
j = i;
while(j < i + 3) {
if(input[S[j]]) {
  hashCnt[S[j]] = 1;
}


j++;
}
} else {
hashCnt = {}
}
if(Object.values(hashCnt).length === 3) {
  result.push(hashCnt);
  cnt++;
  hashCnt = {}
} else {
  hashCnt = {}
}
}
return {cnt, result}
  
}
const ana = hashCount(T)
solution(ana);