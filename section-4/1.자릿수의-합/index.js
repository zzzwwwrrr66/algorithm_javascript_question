/*
  N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
  자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/ 

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const N = Number(input.shift());
let [nums] = input;
nums = nums.split(" ");
console.log(nums);

function solution (input) {
  let max = 0;
  let maxValue = 0;
  for(let i = 0; i < N; i++ ) {
    const num = input[i];
    console.log(num);
    let sum = 0;
    for(let j = 0; j < num.length; j++) {
      sum+=Number(num[j])
    }
    if(max <= sum) {
      max = sum;
      if(Number(maxValue) < Number(num)) maxValue = num;
      
    }
  }

  return maxValue
}
const result = solution(nums);
console.log("result", result);