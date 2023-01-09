const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split(" ").map(v => Number(v));

console.time("test")
const sum = input.reduce((a, b)=> a + b);
function result (input) {
  for(let i = 0; i < input.length; i++) {
    for(let j = i + 1; j < input.length; j++) {
      // if(input[i] === input[j]) continue;

      if( (sum - (input[i] + input[j])) === 100) {
        // result.push(input[i] , input[j]);
        input.splice(j, 1)
        input.splice(i, 1);
        return input;
      }
    }
  }
}
// const deleteVals = result(input);
// const resultVals = input.filter(v=> !deleteVals.includes(v));
console.log(result(input));
console.timeEnd("test")