// var threeSum = function(nums) {
//   const result = [];
//   for(let x = 0; x < nums.length - 2; x++) {
//     for(let y = x + 1; y < nums.length - 1; y++) {
//       for (let z = y + 1; z < nums.length; z++) {
//         if(nums[x] + nums[y] + nums[z] === 0) {
//           result.push([nums[x], nums[y], nums[z]]);
//         }
//       }
//     }   
//   }
//   return result;
// };


var threeSum = function(nums) {
  let solution = [];
  let left = 0;
  let right = nums.length - 1;

  nums.sort((a, b) => a - b);

  

  for(let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if(number > 0) return solution;
    if(number === nums[i - 1]) continue;
    left = i + 1;
    
    let temp = 0;
    while(left < right) {
      temp = number + nums[left] + nums[right];
      if(temp === 0) {
        solution.push([number, nums[left], nums[right]]);
        left++;
        right--;
      }
      else if(temp > 0 ){
        right--;
      }
      else if(temp < 0) {
        left++;
      }
    }
  }

  return solution;
};

const input = [-1, 0, 1, 2, -1, 4];

console.log(threeSum(input))