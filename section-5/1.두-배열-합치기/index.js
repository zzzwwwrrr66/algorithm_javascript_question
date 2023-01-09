const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const nums_1 = input[1].split(" ").map(v=>v*1)
const nums_2 = input[3].split(" ").map(v=>v*1)

function merge (arr_1, arr_2) {
  let i = 0;
  let j = 0;
  let resultArr= [];
  while(i < arr_1.length && j < arr_2.length) {
    if(arr_1[i] === arr_2[j]) {
      resultArr.push(arr_1[i]);
      resultArr.push(arr_2[j]);
      i++;
      j++;
    }
    if(arr_1[i] < arr_2[j]) {
      resultArr.push(arr_1[i]);
      i++;
    } else {
      resultArr.push(arr_2[j]);
      j++;
    }
  }
  while(i < arr_1.length) {
    resultArr.push(arr_1[i]);
    i++
  }
  while(j < arr_2.length) {
    resultArr.push(arr_2[j]);
    j++
  }
  return resultArr.join(" ")
}
console.log(
merge(nums_1, nums_2),
[].concat(nums_1, nums_2).sort((a, b)=>a - b)
);