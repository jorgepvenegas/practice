const arr = [1,2,3,[5,6,7,[8,9],10],11,[12,[13,[14]]]];


const flatten = arr => {
  // Iterate array
  // Check each value cchecking if it is an array
  // - if array, run a recursion and concatenate output

  return arr.reduce((prev, curr) => {
    return prev.concat( Array.isArray(curr) ? flatten(curr) : curr);
  }, [])
}

console.log(flatten(arr));