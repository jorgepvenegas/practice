// const solve = (strArray) => {
//   let firstWord = strArray[0];
//   let dict = firstWord.split("").reduce((acc, cur) => {
//     if(acc[cur]) {
//       acc[cur]++
//     }
//     else{
//       acc[cur] = 1;
//     }
//     return acc;
//   }, {});
  
//   for(let i = 0; i < strArray.length; i++) {
//     let checkDict = {...dict};
//     for(let char of strArray[i]) {
//       char = char.toLowerCase();
//       if(!checkDict[char]) {
//         return false;
//       }
//       else {
//         checkDict[char]--;
//         if(checkDict[char] < 0) {
//           return false
//         }
//       }
//     }

//     remaining = Object.values(checkDict).reduce((acc, cur) => acc + cur);
//     if(remaining) {
//       return false;
//     }
//   }  
//   return true;
// };

const solve = words => {
  words = words.map( word => 
    word
      .toLowerCase()
      .split("")
      .sort((a, b) => a - b)
      .join("")
    )
  const firstWord = words[0];
  return words.every( word => word === firstWord);
}


console.log(solve(["dogs", "dog", "god", "gods"]));