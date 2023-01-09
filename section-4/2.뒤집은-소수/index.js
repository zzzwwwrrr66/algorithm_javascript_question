/*
  N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
  자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/ 

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, input] = fs.readFileSync(path).toString().split("\n");
function isPrimeNumber(n){
	if(n==1) return false;
	for(let i=2; i<n; i++){
		if(n%i==0) return false;
	}
	return true;
}
const result = input
.split(" ").
map((v)=>Number(v.split("").reverse().join("")))
.filter(v=>isPrimeNumber(v))
.join(" ");
console.log(result);



