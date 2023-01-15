const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().split("\n");
const [board, moves] = [
  [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
  [1,5,3,5,1,2,1,4]
];
console.log(board, moves);

const solution = () => {
  const stack = new Map();
  for(let i = 0; i < moves.length; i++) {
    const currentVal = moves[i] - 1;
    for(let j = 0; j < board.length; j++) {
      if(board[j][currentVal] > 0) {
        stack.set(board[j][currentVal]);
        board[j][currentVal] = 0;
        break;
      }
    }
  }
  return stack;
}
const stack = solution();
console.log(stack.size);
// JSON.parse









