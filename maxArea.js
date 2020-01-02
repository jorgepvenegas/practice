var maxArea = function(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while(left < right) {
    let leftHeight = height[left];
    let rightHeight = height[right];
    let currentArea = Math.min(leftHeight, rightHeight) * (right - left);
    max = Math.max(max, currentArea);

    leftHeight < rightHeight ? left++ : right--;
  }
  return max;
};


console.log(maxArea([1,3,3,7,8]));