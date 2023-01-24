const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[n], ...nums] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
// 회의실 시간 문제, 배낭 가장 먼저 들어가는 문제 
// 첫번째 값을 최선의 값으로 생각하고 해보는것 
// 그냥 해보고 보장은 안되는 알고리즘 
function solve (input)  {
  let answer = 0;
  input.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])
  let endTime = 0;
  for(let i = 0; i < n; i++) {
    if(input[i][0] >= endTime) {
      endTime = input[i][1];
      answer++;
    }
  }
  return answer;
}

console.log(
solve(nums)
)