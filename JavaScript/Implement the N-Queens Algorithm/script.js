function dfsNQueens(n) {
  if (n < 1) {
    return [];
  }

  const solutions = [];
  const board = [];

  function isSafe(row, col) {
    for (let prevRow = 0; prevRow < row; prevRow++) {
      const prevCol = board[prevRow];

      // Same column
      if (prevCol === col) {
        return false;
      }

      // Same diagonal
      if (Math.abs(prevRow - row) === Math.abs(prevCol - col)) {
        return false;
      }
    }

    return true;
  }

  function backtrack(row) {
    // All queens have been placed
    if (row === n) {
      solutions.push([...board]);
      return;
    }

    // Try every column in the current row
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row] = col;

        backtrack(row + 1);

        // Remove the queen and try another column
        board.pop();
      }
    }
  }

  backtrack(0);

  return solutions;
}
