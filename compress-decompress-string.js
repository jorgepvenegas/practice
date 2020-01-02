// # Implement compress() and decompress() functions for a basic string compression scheme. 
// # In particular, we would like to compress strings with long runs of the same character, for example
// # "aaabbbbbbccdddd".

// # example outputs:
// # compress()
// # "aabbcc" => "a2b2c2"
// # "aabbbaa" => "a2b3a2"
// # "abcd" => "abcd"

// # decompress()
// # "ab3c2" => "abbbcc"
// # "defg" => "defg"
// # "aa5" => "aaaaaa"



// function compress(str) {
//   let previous = str[0];
//   let repetitions = 1;
//   let output = "";
//   for(let i = 1; i < str.length; i++){
//       let c = str[i];
      
//       if(c === previous) {
//           repetitions += 1;
//       }
//       else{
//           output = `${output}${previous}${repetitions === 1 ? "" : repetitions}`
//           repetitions = 1;
//           previous = c;       
//       }
//   }
//   output = `${output}${previous}${repetitions === 1 ? "" : repetitions}`.split("");
//   console.log(output);
//   // return output.split("");
// }

function decompress(str) {
  let p1 = 0;
  let p2 = 1;

  while(p2 < str.length) {
    let current = str[p1];
    let next = str[p2];

    if()
  }
  
  return output + buildString(str.charAt(lastChar), repetitions)
  // a, b, 3, 3,  c, 2
}

function buildString(char, number) { //b, 3
  let result = '';
  while(result.length < number) {
      result += result + char;
  }
  return result;
}
// console.log(decompress("ab3c2")); //abbbcc


console.log(compress("aabbcc") === "a2b2c2"); // a2b2c2
console.log(compress("aabbbaa") === "a2b3a2"); // a2b3c2
console.log(compress("abcd") === "abcd"); // abcd