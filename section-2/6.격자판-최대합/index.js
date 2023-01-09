const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input.shift());
const canvas = input.map(v=>v.split(" "))

function solution(input) {
  let lowMax = 0;
  let colMax = 0;
  let diagonalSum_1 = 0;
  let diagonalSum_2 = 0;
  let diagonalMax = [];
  let k = N;
  for (let i = 0; i < N; i++) {
    let lowSum = 0;
    let colSum = 0;
    for (let j = 0; j < N; j++) {
      // low
      lowSum += Number(input[i][j]);
      // col
      colSum += Number(input[j][i]);
    }
    if (lowMax < lowSum) lowMax = lowSum;
    if (colMax < colSum) colMax = colSum;
    k--;
    diagonalSum_1 += Number(input[i][i]);
    diagonalSum_2 += Number(input[k][k]);
  }
  diagonalMax = Math.max(diagonalSum_1, diagonalSum_2);
  const result = Math.max(lowMax, colMax, diagonalMax);

  return result;
}
console.log(
  solution(canvas) 
)

