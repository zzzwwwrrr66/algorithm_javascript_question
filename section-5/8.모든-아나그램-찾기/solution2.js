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


const ana = hashCount(T);
console.log("🚀 ~ file: solution2.js:18 ~ ana", ana);



// function solution(m, arr){
//   let answer = 0;
//   let lt=0;
//   let sum=0;
//   for(let rt = 0; rt < arr.length; rt++){
//       sum += arr[rt];
//       if(sum === m) answer++;
//       while(sum >= m){
//           sum -= arr[lt];
//           lt++;
//           if(sum === m) answer++;       
//       }
//   }        
//   return answer;
// }

let lt = 0;
let compareHash = {};
let cnt = 0;
let sum = 0;
for(let i = 0; i < S.length; i++) {
  if(ana[S[i]]) {
    compareHash[S[i]] = 1;
    sum++;
    while(sum >= 3) {
      
    }
  }
 // sum += hash[i]
}
