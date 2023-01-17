const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [pepleNum, conditionNum] = fs.readFileSync(path).toString().split(" ").map(v=>v*1);

const solution = (input) => {
  input = Array.from({length: 8}, (_, i)=>i + 1);
  let i = 1;
  while(input.length > 1) {
    if(i % conditionNum === 0) {
      input.shift();
    } else {
      const currentHumanNum = input.shift();
      input.push(currentHumanNum);
    }
    i++;
  }
  return (input);
}
console.log(
solution(pepleNum)
);

// [1,2,3,4,5,6,7,8].shift();
//