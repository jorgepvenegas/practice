function hourglassSum(arr) {

  let maximumValue = -Infinity;

  const calculateHourglass = (fromRow, fromCol, toRow, toCol) => {
      let hourglassValue = 0;
      for(let x = fromRow; x <= toRow; x++) {
          for(let y = fromCol; y <= toCol; y++) {
            if((toRow - x) === 1) {
                if((toCol - x === 1)) {
                  hourglassValue += arr[x][y];        
                }
              continue;
              }
          }
      }
      // console.log(hourglassValue);
      return hourglassValue;
  }

  for(let x = 0; x < arr.length - 2; x++) {
      for(let y = 0; y < arr[0].length - 2; y++) {
          let hourglassValue = calculateHourglass(x, y, x+2, y+2);
          maximumValue = maximumValue < hourglassValue ? hourglassValue : maximumValue;
      }
  }
  return maximumValue;

}


const input = [ 
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 0, 2, 4, 4, 0 ],
[ 0, 0, 0, 2, 0, 0 ],
[ 0, 0, 1, 2, 4, 0 ]];

hourglassSum(input);