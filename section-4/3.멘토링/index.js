/*
  N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 
  자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
*/ 

const { time } = require('console');
const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = fs.readFileSync(path).toString().split("\n");
const [students, testNum] = N.split(" ").map(v=>v*1);


const test = input.map(v=>v.split(" ").map(v=>v*1));
function W_solution(input) {
	const bucket = {};

	for(let i = 0; i < testNum; i++) {
		for(let j= 0; j < students; j++) {
			const currentIndex = input[i].indexOf(j + 1);
			const currentlastArr = input[i].slice(currentIndex + 1);
			if(!bucket[j + 1]) {
				bucket[j + 1] = currentlastArr;
			}
			else {
				bucket[j + 1] = bucket[j + 1].filter(v=>{
					if(currentlastArr.indexOf(v) > -1) return v
				})
			}
		}
	}
	const result = Object.entries(bucket).map(v=>v[1].length).reduce((a, b)=>a+b);

	return result;
}
console.time("wooram")
console.log(
	W_solution(test)
)
console.timeEnd("wooram")


function solution(test){
	let answer=0;
	m=test.length;
	n=test[0].length;
	for(let i=1; i<=n; i++){
			for(let j=1; j<=n; j++){
					let cnt=0;
					for(let k=0; k<m; k++){
							let pi=pj=0;
							for(let s=0; s<n; s++){
									if(test[k][s]===i) pi=s;
									if(test[k][s]===j) pj=s;
							}
							if(pi<pj) cnt++;
					}
					if(cnt===m) answer++;
			}
	}
	return answer;
}
console.time("lecture")
console.log(
	solution(test)
)
console.timeEnd("lecture")