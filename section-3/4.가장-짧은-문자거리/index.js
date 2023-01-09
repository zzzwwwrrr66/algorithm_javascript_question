const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split(" ");

const words = input[0];
const currentWord = input[1];

const resultArr= [];
// string 만큼 loop
for(let i = 0; i < words.length; i++){
  // current word 찾기 
  if(words[i]===currentWord) {
    resultArr.push(0);
  } else {
    let j = i - 1;
    let k = i + 1;
    while(j >= 0 || k <= words.length) {
      if(words[j] === currentWord) { // currentWord 찾으면 break
        // 현재  i 랑 j 마이너스, resultArr 저장
        resultArr.push(i - j);
        break;
      }
      if(words[k] === currentWord) { // currentWord 찾으면 break
        // 현재  k 랑 i 마이너스, resultArr 저장
        resultArr.push(k - i);
        break;
      }
      j--;
      k++;
    }
    
  }
}
console.log(resultArr.join(" "));
