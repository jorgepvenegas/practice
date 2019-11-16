function removeDuplicates(str) {
  let arr = str.split(" ");
  let set = new Set(arr);
  return [...set].join(" ");
}


function removeConsecutiveDuplicates(str) {
  let arr = str.split(" ");
  if(arr.length < 2) return str;
  let lastWord = arr[0];
  let output = [lastWord];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] !== lastWord) {
      lastWord = arr[i];
      output.push(arr[i]);
    }
  }
  return output.join(" ")
}

const test = "this is a new new new new input in a new output"

console.log(removeConsecutiveDuplicates(test));
console.log(removeDuplicates(test));