// 삼각형의 양쪽 선이 맨아래 선보다 커야 삼각형을 만들수 있다 
/*
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 
만들 수 없으면 ”NO"를 출력한다.
▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.
▣ 입력예제 1 6 7 11
▣ 출력예제 1 YES
 */

const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().split(" ").map(v=>v*1);
console.log(Math.min(...input))