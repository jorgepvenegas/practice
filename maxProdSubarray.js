var maxProduct = function(nums) {
  let current = nums[0];
  let max = nums[0];
  
  for(let i = 1; i < nums.length; i++) {
      current = Math.max(nums[i], nums[i] * current);
      max = Math.max(current, max);
  }
  
  return max;
  
};


maxProduct([-2, 3, -4]);