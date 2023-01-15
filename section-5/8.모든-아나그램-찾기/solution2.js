const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n")
const [S, T] = input;
console.log("input", S, T);

function hashMap (string, leng = string.length) {
  const map = new Map();
  for(let i = 0; i < leng; i++) {
    const currentWord = string[i];
    if(!map.get(currentWord)) map.set(currentWord, 1);
    else map.set(currentWord, map.get(currentWord) + 1);
  }
  return map;
}
const compareMaps = (mapA, mapB) => {
  if(mapA.size !== mapB.size ) return false;
  for([key, val] of mapA) {
    if(!mapB.has(key)) return false;
    if(val !== mapB.get(key)) return false;
  }
  return true;
}

const solution = (stringA, stringB) => {
  const leng = stringB.length - 1
  const sMap = hashMap(stringA, leng);
  const tMap = hashMap(stringB);
  let resultCnt = 0;
  
  let lt = 0;
  for(let rt = leng ;rt < stringA.length; rt++) {  
    const currentWord = stringA[rt];
    const deleteWord = stringA[lt];
    // 1. add currentWord to sMap
    if(!sMap.get(currentWord)) sMap.set(currentWord, 1);
    else sMap.set(currentWord, sMap.get(currentWord) + 1);

    // 2. compare Maps with sMap, tMap and cnt++ or not
    if(compareMaps(tMap, sMap)) resultCnt++;

    // 3. delete stringA[lt] on sMap
    sMap.set(deleteWord, sMap.get(deleteWord) - 1);
    if(sMap.get(deleteWord)===0) sMap.delete(deleteWord);
    lt++;
  }

  console.log(resultCnt);
  
}
solution(S, T);

// function solution(m, arr){
//   let answer = 0;
//   let lt=0;
//   let sum=0;
//   for(let rt = 0; rt < arr.length; rt++){
//       sum += arr[rt];
//       if(sum === m) answer++;
//       while(sum >= m){
//           sum -= arr[lt];
//           lt++;
//           if(sum === m) answer++;       
//       }
//   }        
//   return answer;
// }