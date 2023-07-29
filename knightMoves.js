import Position from "./Position.js";
import possibleMoves from "./possibleMoves.js";

const knightMoves = function (start, target) {
  let searchQueue = [];
  searchQueue.push({ position: start, history: [] });

  function search() {
    let current = searchQueue.shift();
    current.history.push(current.position);
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
    if (searchQueue.length == 0) return result;
  }
};

export default knightMoves;
