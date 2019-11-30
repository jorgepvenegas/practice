let matrix = [
  [5,9,1,10],
  [2,4,7,6],
  [0,3,8,11],
  [20,16,4,6]
]


const sortSpiral = matrix => {
  let arr = [];
  // Transform 2d array into a unidimensional array
  for(let x = 0; x < matrix.length; x++) {
    for(let y = 0; y < matrix.length; y++) {
      arr.push(matrix[x][y]);
    } 
  }

  // Sort unidimensional array
  arr = arr.sort((a, b) => a - b);

  // Set pivot values used to iterate matrix as a spiral (top edge, right edge, bottom edge, left edge)
  let colStart = 0;
  let rowStart = 0;
  let colEnd = matrix.length - 1;
  let rowEnd = matrix.length - 1;
  let count = 0;

  while(colStart < colEnd && rowStart < rowEnd) {
  // (while count < arr.lenght) could also work here
    // top edge
    for(let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = arr[count++];
    }
    rowStart++;

    // right edge
    for(let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = arr[count++];
    }
    colEnd--;

    // bottom edge
    for(let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = arr[count++];
    }
    rowEnd--;

    // left edge
    for(let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = arr[count++];
    }
    colStart++;
  }
  return matrix;
}

sortSpiral(matrix);

/*

[ [ 0, 1, 2, 3 ],
  [ 9, 10, 11, 4 ],
  [ 8, 20, 16, 4 ],
  [ 7, 6, 6, 5 ] ]
*/