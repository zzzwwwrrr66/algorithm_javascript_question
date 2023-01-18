const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [self, input] = fs.readFileSync(path).toString().split("\n");
console.log(self, input)
function solution(need, plan){
  let answer="YES";
  let queue=need.split('');
  for(let x of plan){
      if(queue.includes(x)){
          if(x!==queue.shift()) return "NO";
      }
  }
  if(queue.length > 0) return "NO";  
  return answer;
}
console.log(
solution(self, input)
)