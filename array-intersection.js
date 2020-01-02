var arraysIntersection = function(arr1, arr2, arr3) {
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let intersection = [];
  while(p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    if(arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
      intersection.push(arr1[p1]);
      p1 += 1;
      p2 += 1;
      p3 += 1;
    }
    else{
      let lowest = Math.min(arr1[p1], arr2[p2], arr3[p3]);
      if (lowest === arr1[p1]) {
        p1 += 1;
      }
      else if (lowest === arr2[p2]) {
        p2 += 1;
      }
      else {
        p3 += 1;
      }
    }
  }

  console.log(intersection)

}

// var arraysIntersection = function(arr1, arr2, arr3) {
//   let frequencies = new Map();

//   const iterate = (arr) => {
//     for(let num of arr) {
//       if(frequencies.has(num)) {
//         frequencies.set(num,  frequencies.get(num) + 1);
//       }
//       else {
//         frequencies.set(num, 1);
//       }
//     }
//   }

//   iterate.apply(this, Array.from(arguments));

//   let ret = [];

//   for(let [num, freq] of frequencies.entries()) {
//     if(freq === 3) {
//       ret.push(num);
//     }
//   }
//   return ret;
// };

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,5,7,9];
const arr3 = [1,3,4,5,8,10];

arraysIntersection(arr1, arr2, arr3);