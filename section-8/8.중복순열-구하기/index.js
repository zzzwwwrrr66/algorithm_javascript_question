const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n , m] = fs.readFileSync(path).toString().split(" ").map(v=>v*1);
// n => 1 부터 n까지의 번호가 적힌 구슬 
// m => 뽑는 횟수 
/*
▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 
출력순서는 사전순으로 오름차순으로 출력합니다.
▣ 입력예제 1 
3 2
▣ 출력예제 1 
1 1
1 2
1 3
2 1 
2 2 
2 3 
3 1 
3 2 
3 3 
9
*/
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