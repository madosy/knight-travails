import possibleMoves from "./possibleMoves.js";
import knightMoves from "./knightMoves.js";

let chessBoard = Array.from({ length: 8 }, (item) => Array(8).fill(null));
knightMoves([3, 3], [4, 1]);
console.log();
