const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString();
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
const inputLocal = `37+*9-`;

const solution = (input) => {
  const stack = [];
  for(let val of input) {
    if(-Infinity < Number(val)) {
      stack.push(Number(val));
    } else {
      const rt = stack.pop();
      const lt = stack.pop();
      const math = eval(`${lt} ${val} ${rt}`);
      stack.push(math);
    }
  }
  return stack.join("");
}
console.log(solution(input));


// JSON.parse









