const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = 
fs
.readFileSync(path)
.toString()
.split("\n")
.map(v=>(v.split(" ").map(v=> v * 1)));



/*
  7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 
  출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 
  격자판의 1은 벽이고, 0은 통로이다. 격 자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면
 */
console.log(input, input.length);


function solve(x, y, board) {
  // 0, 0 start point;
  // x y 12, 3, 6, 9
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  function DFS(x, y) {
    if(x === 6 && y === 6) {
      answer++
      return;
    } else {
      for(let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        // -1 아닐때 6 안넘어갈때, 가는쪽이 1이 아닐때, 
        if(nx > -1 && nx <= 6 && ny > -1 && ny <= 6 && board[nx][ny] === 0) {
          // 갔던길을 1 바꾼다, 
          board[nx][ny] = 1;
          // recursion dfs
          DFS(nx, ny);
          // 돌아올때 0 으로 돌린다 
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(x, y);
  return answer;
}
console.log(
solve(0, 0, input)
)
