import possibleMoves from "./possibleMoves.js";
import knightMoves from "./knightMoves.js";

let chessBoard = Array.from({ length: 8 }, (item) => Array(8).fill(null));
console.log(knightMoves([1, 3], [1, 3]));
console.log();
