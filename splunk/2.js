// first pair of number which sum is 14

const input_array = [1, 7, 9, 0, 2, 8, 5, 4, 6];

function findSum(arr, target) {
  let store = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (!store[diff]) {
      store[arr[i]] = i;
    } else {
      return [arr[i], arr[store[diff]]];
    }
  }
}

console.log(findSum(input_array, 14));