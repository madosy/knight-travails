import possibleMoves from "./possibleMoves.js";

let chessBoard = Array.from({ length: 8 }, (item) => Array(8).fill(null));

let startingPosition = [3, 3];

let myMoves = possibleMoves(startingPosition);
let iteration = 0;

function calculateSteps(myMoves) {
  myMoves.forEach(([x, y]) => {
    if (chessBoard[x][y] !== null) return;
    chessBoard[x][y] = iteration + 1;
    let newMoves = possibleMoves([x, y]);
  });
}
calculateSteps(myMoves);

// myMoves.forEach(([x, y]) => {
//   if (chessBoard[x][y] !== null) return;
//   chessBoard[x][y] = iteration + 1;
//   iteration++;

//   let subMoves = possibleMoves([x, y]);
//   subMoves.forEach(([x, y]) => {
//     if (chessBoard[x][y] !== null) return;
//     chessBoard[x][y] = 2;
//   });
// });

console.log(chessBoard);
console.log("hi");
