var productExceptSelf = function(nums) {
  let output = [];
  let sum = 1;
  for(let n = 0; n < nums.length; n++) {
      sum = 1;
      console.log('sum', sum);
      for(let x = 0; x < nums.length; x++) {
          if(n === x) {
              continue;
          }
          else{
              sum *= nums[n] * nums[x];
          }
      }
      
      output.push(sum);
  }
  return output;
};


productExceptSelf([1,2,3,4]);