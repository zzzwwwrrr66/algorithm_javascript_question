const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [[n, m], ...nums] = 
// fs
// .readFileSync(path)
// .toString()
// .split("\n")
// .map(v=>(v.split(" ").map(v=> v * 1)));



/*
12 13 14 21 23 25 34 42 45

[
  [ 0, 1, 1, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 0, 0, 0, 1, 0 ],
  [ 0, 1, 0, 0, 1 ],
  [ 0, 0, 0, 0, 0 ]
]n 
~/Doc
 */

let nums=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
function solution (n, m, arr) {
  const check = Array.from({length: n + 1}, ()=>0);
  const graph = Array.from(Array(n + 1), ()=>Array(n + 1).fill(0));
  const path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log("wooram", graph);
  //___________________________________________________________________________
  //
  // function DFS(V) {
  //   if(V === 5) {
  //     console.log(check, path);
  //     return;
  //   } else {
  //     for(let i = 1; i <= 5; i++) {
  //       if(graph[V][i] === 1 && check[i] === 0) {
  //         check[i] = 1;
  //         path.push(i)
  //         DFS(i);
  //         check[i] = 0;
  //         path.pop()
  //       }
  //     }
  //   }
  // }            
  // check[1] = 1;
  // path.push(1);
  // DFS(1);


}
solution (5, 9, nums);