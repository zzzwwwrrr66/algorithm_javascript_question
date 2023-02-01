const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(path).toString().split("");
console.log(N);
const input = N * 1;
let xx = 1;
// # 팩토리얼
// 팩토리얼 마지막 수가 return 을 해줌으로써,
// 정의했던 함수들도 다 리턴 값으로 만들어진다
function solve (L) {
  if(L === 1) {
    return 1;
  } 
  else {
    // xx = xx * L;
    return L * solve(L - 1);
  }
}
console.log(
solve(5)
)



