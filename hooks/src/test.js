var minEatingSpeed = function(piles, H) {
  const largest = Math.max(...piles);
  if (piles.length === H) return largest;

  // Binary search between 1 and largest
  let lo = 1;
  let hi = largest;
  let i = Math.floor((lo + hi) / 2);
  while (lo < hi) {
    let time = 0; // Find the time needed
    for (let p of piles) {
      if (i >= p) {
        time++;
      } else {
        time += Math.ceil(p / i);
      }
      if (time > H) {
        // During the loop, if the time is already larger then H,
        // then the speed is too low, so we need to increase the lower bound
		    // And we can terminate the loop
        lo++;
        i = Math.floor((lo + hi) / 2);
        break;
      }
    }
    // After the loop the time is still smaller or equals to H,
    // then the speed is too high, we can reduce the speed by decreasing the higher bound
    if (time <= H) {
      hi = i; // Notice here: compare it with hi = i - 1;
      i = Math.floor((lo + hi) / 2);
    }
  }
  return lo;
};


console.log(minEatingSpeed([30,11,23,4,20], 20));