const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = 
fs
.readFileSync(path)
.toString()
.split("\n")
.map(v=>(v.split(" ").map(v=> v * 1)));
/*
[
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
]
*/
function solution (arr) {
  // const check = Array.from({length: input.length}, ()=>0);
  // const path = [];

  // x, y 값을 미리 설정 
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let answer = 0;
  function DFS(x, y) {
    if(x === 6 && y === 6) {
      // console.log(check);
      answer++;
      return;
    } else {
        // 12, 3, 6, 9 시 순으로 돌기
      for(let i = 0; i < 4; i++) { // check x,y && arr[ny][nx] === 0
        let nx = x + dx[i];
        let ny = y + dy[i];
        if( nx >= 0 && nx <= 6 && 
          ny >= 0 && ny <= 6 && 
          arr[nx][ny] === 0
        ) {
          arr[nx][ny] = 1;
          DFS(nx, ny);
          arr[nx][ny] = 0;
        }; 
      }
    }
  }
  arr[0][0] = 1;
  DFS(0, 0);
  console.log(answer);
}
solution(input);