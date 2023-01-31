const fs = require('fs');
const { deflateSync } = require('zlib');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n, limitTime], ...nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const input = nums;
console.log(n, limitTime, input);


/*
▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.
▣ 입력예제 1 
5 20

10 5
25 12
15 8 
6 3 
7 4
*/
console.log(limitTime);

const result = [];
let max = 0;
function solve(l, sum, time) {
  if(l === input.length) {
    if(time <= limitTime && max < sum) {
      max = sum;
      result.push([sum, time]);
    }
    return;
  }
  // left
  solve(l + 1, sum + input[l][0], time + input[l][1]);
  // right
  solve(l + 1, sum, time);
}
solve(0 , 0, 0);
console.log(result,  max);