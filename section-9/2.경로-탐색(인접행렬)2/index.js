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
  const graph = Array.from(Array(n + 1), ()=>[]);
  const ch = Array.from({length: n + 1}, ()=>0);
  const path = [];
  for (let [a, b] of arr) {
    graph[a].push(b);
  }
  console.log("wooram graph", graph);
  //___________________________________________________________________________
  //
  function DFS(v){
    if(v === n){
      // answer++;
      console.log("path", path,"\ncheck", ch);
    }
    else{
      for(let nv of graph[v]){
        if(ch[nv]===0){
          path.push(nv);
          ch[nv]=1;
          DFS(nv);
          ch[nv]=0;
          path.pop();
        }
      }
    }
}
  ch[1] = 1;
  path.push(1);
  DFS(1);


}
solution (5, 9, nums);