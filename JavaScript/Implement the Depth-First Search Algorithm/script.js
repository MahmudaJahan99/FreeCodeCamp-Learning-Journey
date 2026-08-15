function dfs(graph, root) {
  const visited = new Set();
  const stack = [root];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (!visited.has(current)) {
      visited.add(current);
      result.push(current);

      const neighbors = graph[current];

      for (let i = neighbors.length - 1; i >= 0; i--) {
        if (neighbors[i] === 1 && !visited.has(i)) {
          stack.push(i);
        }
      }
    }
  }

  return result;
}
