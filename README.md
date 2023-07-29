# knight-travails

Algorithmically move the knight piece to a specific position using the fewest possible moves

# My Solution

1. Set first item in the queue as current position.
2. Add current position to history array.
3. Compare current position vs target position. If same, empty the queue and return history.
4. Calculate the next possible moves.
5. Create a position object that contains the coordinates and current history then add to queue.
6. Repeat until the queue is empty.

I thought about Position having properties named "0" ... "7" each representing the x-coordinate. This was my method of implementing "left" and "right" equivalents in BST. If there is no next move associated with this x-coordinate, it would store null but if there were, there'd be an array (like adjacency list). During traversal, I could check each property for children. I did have a branch for possibleMoves() that outputs in adjacency format but I thought this was just making it more confusing than it needs to be.
