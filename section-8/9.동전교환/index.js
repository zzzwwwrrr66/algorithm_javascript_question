const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const [n , m] = fs.readFileSync(path).toString().split("\n");
const m = 3;
const coin = [1, 2 ,5];
const price = 15;
let min = Infinity;
let answer;
let str = "";
let arrs = [];
function solve(L, sum, val) {
  if(sum > price) return; 
  if(answer <= L) return;
  if (sum === price) {
    answer = Math.min(L, min);
  } else {
    for(let i = 0; i < coin.length; i++) {
      solve(L + 1, sum + coin[i]);
    }
  }
}
solve(0, 0);
console.log(answer);