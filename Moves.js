class Moves {
  construct([x, y]) {
    this.nextPossible = possibleMoves([x, y]);
  }
}
