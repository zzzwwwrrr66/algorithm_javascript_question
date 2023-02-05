const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n , m] = fs.readFileSync(path).toString().split(" ").map(v=>v*1);
/*
중복 X 
1 부터 N 까지 번호가 적힌 구슬이 있습니다.
이중 M 개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
*/
console.log(n, m);

let temp = Array.from({length: m}, ()=>0);
const answer = [];
function recursion (L, sum) {
  if(L === m) {
    answer.push(temp.slice());
    return;
  } else {
    for(let i = sum; i <= n; i++) {
      temp[L] = i;
      recursion(L + 1, i + 1);
    }
  }
}

recursion(0, 1);
console.log(
  answer.map(v=>v.join(" ")).join("\n") + "\n" + answer.length
  )