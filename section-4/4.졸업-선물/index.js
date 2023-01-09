const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1));
const [N, price] = input.shift();
const students = input.sort((a, b)=> (a[0] + a[1]) - (b[0] + b[1]));
console.log(students);

// 전체의 경우의 수 를 도는 기준은 정렬이 되있을때
function solution (totalPrice, students) {
	let result = -Infinity;
	const resultArr = [];
	const N = students.length;
	for(let i = 0; i < N; i++) {
		let total = totalPrice;
		total = total - ((students[i][0] / 2) + students[i][1]);
		resultArr[i] = {};
		resultArr[i]["data"] = [];
		resultArr[i]["data"].push([students[i][0], students[i][1]]);
		let cnt = 1;
		for(let j = 0; j < N; j++) {
			const currentSum = (students[j][0]) + (students[j][1]);
			if(currentSum > total) break;
			if(j !== i) {
				total = total - currentSum;
				resultArr[i]["data"].push([students[j][0], students[j][1]]);
				cnt++;
			}
		}
		result = Math.max(cnt, result)
	}
	console.log(resultArr)
	return result;
}
console.log(
solution(price, students)
)

