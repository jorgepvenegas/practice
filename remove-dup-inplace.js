var removeDuplicates = function(nums) {
  let prev = nums[0];
  let current = nums[1];
  let p = 1
  while(current !== undefined) {
    if(current === prev) {
      nums.splice(p, 1);
      prev = current;
      current = nums[p + 1];
      
    }
    else{
      prev = current;
      current = nums[++p];
    }
  }
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);