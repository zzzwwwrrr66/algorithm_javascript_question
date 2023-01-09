const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n").map(v=>v.split(" ").map(v=>v*1))
const [N, limitNum] = input.shift();
let [nums] = input;
nums = nums.sort((a, b) => b - a)
console.log(nums);


function solution (nums) {
	let resultArr = new Set();
	for(let i = 0; i < nums.length; i++) {
		for(let j = 0; j < nums.length; j++) {
			if(j !== i) {
				for(let k = 0; k < nums.length; k++) {
					if(k !== j && k !== i) {
						if(resultArr.size > limitNum - 1) return resultArr;
						let cnt = 0;
						cnt += nums[i] + nums[j] + nums[k];
						resultArr.add(cnt);
					}
				}
			}
		}
	}
}
console.log(
[...solution(nums)][limitNum - 1]
)