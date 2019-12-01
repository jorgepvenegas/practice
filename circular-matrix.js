/*

Given two values m and n, fill a matrix of size ‘m*n’ in spiral (or circular) fashion (clockwise) with natural numbers from 1 to m*n.

Input : m = 4, n = 4
Output :  1  2  3  4
         12 13 14  5
         11 16 15  6
         10  9  8  7 

Input : m = 3, n = 4
Output :  1  2  3  4
          10 11 12 5
          9  8  7  6 
*/

const circularMatrix = (m, n) => { //4 / 3

  let matrix = []
  while(matrix.length < m) {
    let row = [];
    while(row.length < n) {
      row.push(null);
    }
    matrix.push(row);
  }


  let rowStart = 0;
  let rowEnd = m - 1; // 3
  let colStart = 0;
  let colEnd = n - 1; // 2
  let count = 1;

  while(rowStart <= rowEnd && colStart <= colEnd) {
    // iterate top edge
    for(let i = colStart; i <= colEnd; i++) { // 0; 0 < 

      matrix[rowStart][i] = count++;
    }
    rowStart++;

    // iterate right edge
    for(let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = count++;
    }
    colEnd--;

    // iterate bottom edge
    for(let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = count++
    }
    rowEnd--;

    // iterate left edge
    for(let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = count++;
    }
    colStart++;
  }
  console.log(matrix)
}

circularMatrix(5, 2);