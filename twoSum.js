var twoSum = function(nums, target) {
  let store = {};
  for(let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if(store[diff] === undefined) {
      store[nums[i]] = i;
    }
    else{
      return [store[diff], i];
    }
  }
}



console.log(twoSum([2, 7, 11, 15], 9));

// {
//   2: 0,

// }