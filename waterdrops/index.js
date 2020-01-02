const terrain = [5,4,2,1,2,3,2,1,0,1,2,4];

const pour = (ter, location, water) => {

  let count = 0;
  while(count <= water) {
    // let p1 = location;
    let minIdx = location;
    let minVal = ter[location];

    for(let i = location; i > 1; i--) {
      if(ter[i] < ter[minIdx]) {
        minVal = ter[i];
        minIdx = i;

        if(ter[minIdx - 1] > ter[minIdx]) {
          continue;
        }
      }
    }

    if(ter[minIdx] < ter[location]) {
      ter[location]++;
      count++;
      continue;
    }

    for(let i = location; i < ter.length - 1; i++) {
      if(ter[i] < ter[minIdx]) {
        minVal = ter[i];
        minIdx = i;
        if(ter[minIdx + 1] < ter[minIdx]) {
          continue;
        }
      }
    }


    if(ter[minIdx] < ter[location]) {
      ter[minIdx]++;
      count++;
      continue;
    }

    count++;

  }
  return ter;
}

console.log(pour(terrain, 1, 7));



//  x
//  x x                   x 
//  x x x x x x           x 
//  x x x x x x x x     x x 
//  x x x x x x x x x x x x 
//  x x x x x x x x x x x x 
// [5,4,2,1,2,3,2,1,0,1,2,4];