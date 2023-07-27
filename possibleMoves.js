// 0 - 7 is what I decided!
//can't go over 7 nor under 0.

const possibleMoves = function ([x, y]) {
  let possibleMoves = [];

  let xP2 = x + 2 <= 7;
  let xM2 = x - 2 >= 0;
  let yP1 = y + 1 <= 7;
  let yM1 = y - 1 >= 0;

  let xP1 = x + 1 <= 7;
  let xM1 = x - 1 >= 0;
  let yP2 = y + 2 <= 7;
  let yM2 = y - 2 >= 0;

  if (xM2 && yM1) possibleMoves.push([x - 2, y - 1]);
  if (xM2 && yP1) possibleMoves.push([x - 2, y + 1]);
  if (xM1 && yM2) possibleMoves.push([x - 1, y - 2]);
  if (xM1 && yP2) possibleMoves.push([x - 1, y + 2]);
  if (xP1 && yM2) possibleMoves.push([x + 1, y - 2]);
  if (xP1 && yP2) possibleMoves.push([x + 1, y + 2]);
  if (xP2 && yM1) possibleMoves.push([x + 2, y - 1]);
  if (xP2 && yP1) possibleMoves.push([x + 2, y + 1]);

  //adjacency list?

  return possibleMoves;
};

export default possibleMoves;

const myPossibleMoves = possibleMoves([2, 0]);
console.log(myPossibleMoves);

console.log("hi");
