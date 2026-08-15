function adjacencyListToMatrix(adjList) {
  const keys = Object.keys(adjList);
  const size = keys.length;
  const matrix = [];

  for (let i = 0; i < size; i++) {
    matrix[i] = new Array(size).fill(0);
    matrix[i][i] = 0;
  }

  for (let i = 0; i < size; i++) {
    const neighbors = adjList[keys[i]];

    for (const neighbor of neighbors) {
      matrix[i][neighbor] = 1;
    }
  }

  for (const row of matrix) {
    console.log(row);
  }

  return matrix;
}
