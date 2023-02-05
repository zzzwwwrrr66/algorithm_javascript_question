const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [n , m] = fs.readFileSync(path).toString().split(" ").map(v=>v*1);

// function solution(n, r){         
//   let answer=[];
//   let dy= Array.from(Array(35), () => Array(35).fill(0));
  
//   function DFS(n, r){
//       if(dy[n][r]>0) return dy[n][r];
//       if(n===r || r===0) return 1;
//       else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
//   }
//   answer=DFS(n, r);
//   return answer;
// }


function solution (n , r) {
  let answer;
  const dy = Array.from(Array(8), ()=>Array(8).fill(0));
  function DFS(n, r) {
    if(dy[n][r] > 0) return dy[n][r];
    if(n === r || r === 0) return 1;
    else return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r);
  }
  answer = DFS(n, r);
  return answer;
}

console.log(
  solution(5, 3)
);