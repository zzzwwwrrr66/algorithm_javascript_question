const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const arr1 = input[1].split(" ").map(v=>v*1);
const arr2 = input[3].split(" ").map(v=>v*1);


function solution (arr1, arr2) {
  arr1 = arr1.sort((a, b)=>a-b)
  arr2 = arr2.sort((a, b)=>a-b)
  const result = [];
  let m = arr1.length;
  let n = arr2.length;
  let i = 0; let j = 0;
  while(i < m && j < n) {
    if(arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else {
      if(arr1[i] < arr2[j]) {
        i++;
      } else {
        j++;
      }
    }
  }
  console.log(result);
}
solution(arr1, arr2);