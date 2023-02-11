const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = 1;

function BFS(input) {
  // while for queue;
  const Q = [];
  Q.push(input);
  let answer = "";
  
  while(Q.length) {
    console.log(Q);
    let v = Q.shift();
    answer += v + " ";
    for(let nv of [v * 2, v * 2 + 1]) {
      if(nv > 7) continue;
      Q.push(nv);
    }
  }
  return answer;
}
console.log(
BFS(input)
);
