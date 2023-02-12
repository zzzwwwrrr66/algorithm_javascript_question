const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...nums] = 
fs
.readFileSync(path)
.toString()
.split("\n")


const board = nums.map(v=>v.split("").map(v=>v*1));


// 8방향 시계방향으로 
// const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
// const dy = [0, 1, 1, 1, 0, -1, -1, -1];

 


function solve(board) {
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let answer = 0;

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if(board[i][j] === 1) {
        console.log(board);
        recursion(i , j);
        answer++;
      }
    }
  }
  function recursion(x, y) {
    if(board[x][y] === 0) {
      return;
    }else {
      board[x][y] = 0;
      for(let i = 0; i <= N; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx > -1 && nx < N && ny > -1 && ny < N && board[nx][ny] === 1) {
          recursion(nx, ny);
        }
      }
    }
  }
  return answer;
}
console.log(
solve(board)
)