const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [n , m] = fs.readFileSync(path).toString().split("\n");
const m = 3;
const coin = [1, 2 ,5];
const price = 15;
function solution(n, m){
  let answer=[];
  let tmp=Array.from({length:m}, ()=>0);
  function DFS(L){
    if(L===m){
      console.log(L);
      answer.push(tmp.slice());
    }
    else{
      for(let i=1; i<=n; i++){
        tmp[L]=i;
        DFS(L+1);
      }
    }   
  }
  DFS(0);
  return answer;
}

console.log(solution(n, m));