import Position from "./Position.js";
import possibleMoves from "./possibleMoves.js";

const knightMoves = function ([x1, y1], [x2, y2]) {
  // let chessBoard = Array.from({ length: 8 }, (item) => Array(8).fill(null));
  let searchQueue = [];
  searchQueue.push({ position: [x1, y1], history: [] });
  // chessBoard[x1][y1] = new Position([x1, y1]);
  // let nextMoves = chessBoard[x1][y1].nextMoves;
  // function searchInside([x1, y1], previous) {
  //   if (chessBoard[x1][y1] == null) chessBoard[x1][y1] = new Position([x1, y1]);
  //   let currentPosition = chessBoard[x1][y1];
  //   if (currentPosition.x == x2 && currentPosition.y == y2) {
  //     return [currentPosition.x, currentPosition.y];
  //   } else {
  //     searchQueue.push(...currentPosition.nextMoves);
  //     return;
  //   }
  // }
  // while (searchQueue.length > 0) {
  //   searchInside(searchQueue[0], "");
  // }
  let target = [x2, y2];

  function search() {
    let current = searchQueue.shift();
    current.history.push(`${current.position.toString()}`);
    if (current.position[0] == target[0] && current.position[1] == target[1]) {
      searchQueue = [];
      return current.history;
    }
    let nextMoves = possibleMoves(current.position);
    nextMoves.forEach((element) => {
      searchQueue.push({
        position: [...element],
        history: [...current.history],
      });
    });
  }

  while (searchQueue.length > 0) {
    let result = search();
    console.log(result);
  }
};

export default knightMoves;
