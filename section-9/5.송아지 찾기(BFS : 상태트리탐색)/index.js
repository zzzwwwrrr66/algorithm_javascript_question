const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [start, target] = 
fs
.readFileSync(path)
.toString()
.split(" ")
.map(v=>v*1);

/* 
현수는 송아지를 잃어버렸다. 다행히 송아지에는 위치추적기가 달려 있다. 
현수의 위치와 송아 지의 위치가 수직선상의 좌표 점으로 주어지면 
현수는 현재 위치에서 송아지의 위치까지 다음 과 같은 방법으로 이동한다.송아지는 움직이지 않고 제자리에 있다.
현수는 스카이 콩콩을 타고 가는데 한 번의 점프로 앞으로 1, 뒤로 1, 앞으로 5를 이동할 수 있다. 
최소 몇 번의 점프로 현수가 송아지의 위치까지 갈 수 있는지 구하는 프로그램을 작성 하세요.
*/
// nv = [1, -1, 5]


function solve(start) {
  // 이미 간곳이면 return;
  const check = Array.from({length: 10000}, ()=>0);
  let dis = Array.from({length: 10001}, ()=>0);
  const Q = [];
  Q.push(start);
  check[start] = 1;
  dis[start] = 0;
  let answer = 0;
  while (Q.length) {
    let v = Q.shift();
    if(v === target) {
      answer = dis[v]+1;
      break
    };
    for(let nv of [v + 1, v - 1, v + 5]) {
      if(check[nv] === 1) continue;
      check[nv] = 1;
      Q.push(nv);
      dis[nv] = dis[v]+1;
    }
  }
  console.log(answer, dis);
}

solve(start);