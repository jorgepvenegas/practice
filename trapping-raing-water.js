function trapRain(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterBlocks = 0;
  
  while(left < right) {
    // Keep track of highest terrain from the left
    leftMax = Math.max(leftMax, height[left]);
    if(height[left] < leftMax) {
      // calculate difference against max
      waterBlocks += leftMax - height[left];
    }
    
    // Keep track of highest terrain from the right
    rightMax = Math.max(rightMax, height[right]);
    if(height[right] < rightMax) {
      // calculate difference against max
      waterBlocks += rightMax - height[right];
    }
    
    height[left] < height[right] ? left++ : right--;
  }
  
  return waterBlocks;
}

const terrain = [0,1,0,2,1,0,1,3,2,1,2,1] // 6

console.log(trapRain(terrain));


/*


              o
      o w w w o o w o
  o w o o w o o o o o o
------------------------
0 1 0 2 1 0 1 3 2 1 2 1


w = waterblock
o = terrain
*/