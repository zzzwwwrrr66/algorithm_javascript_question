const { LOADIPHLPAPI } = require('dns');
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [n , m] = fs.readFileSync(path).toString().split(" ").map(v=>v*1);
/*
5 3 => n, m => n 개중 m의 숫자의 경우의수들을 뽑기

[2, 4, 5, 8, 12] => n = 5

6 => 뽑은 숫자들m개의 6의 배수를 찾으시오 ex: 4 + 8 + 12 && 2 + 4 + 12

value % 6 === 0 => 6배수
*/
const [n, m] = [5, 3];
const nums = [2, 4, 5, 8, 12];
const multiple = 6;
let temp = Array.from({length: m}, ()=>0);
const answer = [];
let solveCnt = 0;
function recursion (L,startIdx, sum) {
  if(L === m) {
    answer.push({sum, data: temp.slice()});
    if(sum % multiple === 0) solveCnt++;
    return;
  } else {
    for(let i = startIdx; i < n; i++) {
      temp[L] = nums[i];
      recursion(L + 1, i + 1, sum + nums[i]);
    }
  }
}
recursion(0, 0, 0);
console.log(answer, solveCnt);