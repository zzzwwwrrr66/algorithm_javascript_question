const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [subjects, classes] = fs.readFileSync(path).toString().split("\n").map(v=>v.split(""));

console.log(subjects, classes);
// CBA => self
// CBDAGE => YES
// CGEADB => NO 

/*
1. 
 */

// AGEBD
// resultArr[resultArr.length]
// condition => stop to while, self의 순서대로 안나왔을 때

// for 문으로 1 바퀴만 돌고 self 랑 비교하고 맞으면 "YES" or "NO"

// self 랑 비교해서 맞거나 틀리면 shift(), resultArr push OR tempArr push

const localSelf = "CGEADB";
const solve = (self, input) => {
  let cnt = 0;
  let result = ``;
  for(let i = 0; i < input.length; i++) {
    if(self[cnt] === input[i]) {
      result+=input[i];
      cnt = cnt + 1;
    }
  }
  console.log("result check", result === self ? "YES" : "NO");
}

solve(localSelf, classes);
const self = "CBA"
const localSelf2 = classes;
const solve2 = (input, self) => {
  const resultArr = [];
  const tempArr = [];
  while(tempArr.length !== self.length ) {
    let cntIdx = tempArr.length;
    const currentVal = input.shift();

    if(currentVal === self[cntIdx]) {
      tempArr.push(currentVal);
    } else {
      resultArr.push(currentVal)
    }
  }

  return tempArr
}
// CBA
// CGEADB
console.log(localSelf2);
console.log(
  "solbe 2", 
  solve2([ 'C', 'G', 'E', 'A', 'D', 'B' ], self)
);
