const fs = require('fs');
const { deflateSync } = require('zlib');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [[num]] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));

// left = recursion();, right = recursion();
// 


// left => parent * 2, right => parent * 2 + 1
// 이진 트리 탐색 
// 순회는 부모가 기준
// 전위 순회 => 부모 왼쪽 오른쪽 
// 중위 순회 => 왼쪽 부모 오른쪽 
// 후위 순회 => 왼쪽 오른쪽 부모

/*
전위순회 출력 : 1 2 4 5 3 6 7 
중위순회 출력 : 4 2 5 1 6 3 7 
후위순회 출력 : 4 5 2 6 7 3 1
 */
let answer = "";
function dfs(v) {
  if(v > 7) {
    return;
  }
  // 1 2 4 5 3 6 7  
  
  dfs(v * 2);
  
  dfs(v * 2 + 1);
  answer+=`${v}`;
}
dfs(1);
console.log(answer)