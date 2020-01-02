// first pair of number which sum is 14

const input_array = [1, 7, 9, 0, 2, 8, 5, 4, 6];

function findSum(arr, target) {
  for(let i = 0; i < arr.length; i++) {
    for(let x = 1; x < arr.length - 1; x++) {
      if(i === x) continue;
      if((arr[i] + arr[x]) === target) {
        return [arr[i], arr[x]];
      }
    } 
  }
}

console.log(findSum(input_array, 14));