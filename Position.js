import possibleMoves from "./possibleMoves.js";

class Position {
  constructor([x, y]) {
    this.x = x;
    this.y = y;
    this.nextMoves = possibleMoves([x, y]);
  }
}

export default Position;
