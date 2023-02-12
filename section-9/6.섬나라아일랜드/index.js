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
  const check = Array.from(Array(N), ()=>Array(N).fill(0));
  console.log(check);
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let answer = 0;

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      const Q = [];
      if(board[i][j] === 1) {
        Q.push([i, j]);
        board[i][j] = 0;
        while(Q.length) {
          let [x, y] = Q.shift();
          for(let i = 0; i <= N; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i]
             // board[x][y] === 1이면 들어감, 체크된거는 0 으로 바꾸기
            if(nx > -1 && nx < N && ny > -1 && ny < N && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              Q.push([nx, ny]);
            }
          }
        }
        answer++
      }
    }
  }

 
  // -1 보다 크거나, N보다 작거나 같을때, board[x][y] === 1일때
  
  return answer
  
}
console.log(
solve(board)
)