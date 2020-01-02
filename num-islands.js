var numIslands = function(grid) {
  const width = grid.length;
  const height = width && grid[0].length;
  let count = 0;
  for(let w = 0; w < width; w++) {
    for(let h = 0; h < height; h++) {
      if(grid[w][h] === 0) continue;
      count++;
      traverse(w, h);
    }
  }

  function traverse(x, y) {
    if(x < 0 || y < 0 || x === width || y === height) return;
    if(grid[x][y] === 0) return;

    grid[x][y] = 0;

    traverse(x-1, y);
    traverse(x+2, y);
    traverse(x,y-1);
    traverse(x,y+1);
  }
  return count;
}


var matrix = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0],
];

numIslands(matrix);