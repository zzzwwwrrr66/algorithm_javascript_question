const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input.shift());
const canvas = input.map(v=>v.split(" ")).map(v=>v.map(v=>v*1))

function solution(input) {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const self = input[i][j];
      const bottom = input[i + 1] ? input[i + 1][j] : 0;
      const top = input[i - 1] ? input[i - 1][j] : 0;
      const left = input[i][j - 1] || 0;
      const right = input[i][j + 1] || 0;
      const max = Math.max(self, bottom, top, left, right);
      cnt = self === max ? cnt + 1 : cnt + 0;
    }
  }
  return cnt;
}
console.log(
  solution(canvas)
);