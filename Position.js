import possibleMoves from "./possibleMoves.js";

class Position {
  constructor([x, y]) {
    this.x = x;
    this.y = y;
    this.next = [];
  }
}

export default Position;
