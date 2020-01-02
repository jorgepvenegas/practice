function isContinentalDivide(x, y, matrix){
  let queue = [[x, y]];
  let visited = new Set();
  visited.add(`${x},${y}`);

  let pacificReached = false;
  let atlanticReached = false;

  while(queue.length) {
    let [x, y] = queue.shift();

    if(x === 0 || y === 0) {
      pacificReached = true;
    }

    if(x === matrix.length - 1 || y === matrix[0].length - 1) {
      atlanticReached = true;
    }

    if(pacificReached && atlanticReached) continue;

    const neighbors = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1]
    ]

    for(let neighbor of neighbors) {
      let [neighborRow, neighborCol] = neighbor;
      const location = `${neighborRow},${neighborCol}`
      if(visited.has(location)) {
        continue;
      }

      if( neighborRow >= 0 && neighborCol >= 0 && neighborRow < matrix.length && neighborCol < matrix[0].length && matrix[x][y] >= matrix[neighborRow][neighborCol]) {
        visited.add(location);
        queue.push([neighborRow, neighborCol]);
      }
    };
  }

  // console.log(x, y,[...visited], pacificReached && atlanticReached);
  return pacificReached && atlanticReached;
}

function pacificAtlantic(matrix){
  const coordinates = [];

  for(let x = 0; x < matrix.length; x++) {
    for(let y = 0; y < matrix[0].length; y++) {
      coordinates.push([x, y]);
    }
  }

  const result = coordinates.filter( point => {
    let [row, col] = point;
    return isContinentalDivide(row, col, matrix);
  })

  return result;
}

const matrix = [
  [1,2,2,3,5],
  [3,2,3,4,4],
  [2,4,5,3,1],
  [6,7,1,4,5],
  [5,1,1,2,4]
]

console.log(pacificAtlantic(matrix))