const words = ["abcd","dcba","lls","s","sssll"]



const palindromePairs = function(words) {
  // let pairs = [];
  // let visited = {};
  // let x;
  // for(let i = 0; i < words.length; i++) {
  //   x = 0;
  //   while(x < words.length) {
  //     if(visited[`${i}${x}`]) {
  //       x++;
  //       continue;
  //     } else if(x === i) { 
  //       x++;// if comparing same word, skip cycle
  //       continue;
  //     } else {
  //       visited[`${i}${x}`] = true;
  //       let w1 = words[i];
  //       let w2 = words[x];
  //       // check if palindrome
  //       let concatenated = w1 + w2;
  //       let leftSide = concatenated.slice(0, Math.floor(concatenated.length / 2));
  //       let rightSide = concatenated.slice(Math.ceil(concatenated.length / 2)).split("").reverse().join("");

  //       if(leftSide === rightSide) { // we have a palindrome pair
  //         pairs.push([i, x]);
  //       }
  //     }
  //     x++;
  //   }
  // }
  const res = [];
  
  const map = new Map(words.map((item, index) => [item, index]))

  if (!words || words < 2) return res;
  words.forEach((word, index) => {
      for (let i = 0; i <= word.length; i++) {
          let str1 = word.substring(0, i)
          let str2 = word.substring(i, word.length)
          if (isPal(str1)) {
              const revStr2 = str2.split('').reverse().join('')
              if (map.has(revStr2) && map.get(revStr2) !== index) {
                  res.push([map.get(revStr2), index])
              }
          }
          if (str2.length > 0 && isPal(str2)) {
              const revStr1 = str1.split('').reverse().join('')
              if (map.has(revStr1) && map.get(revStr1) !== index) {
                  res.push([index, map.get(revStr1)])
              }
          }
      }
  })
  
  return res
  
  function isPal(str) {
      let left = 0, right = str.length - 1
      while (left < right) {
          if (str.charAt(left++) !== str.charAt(right--)) return false
      }
      return true
  }
};


palindromePairs(words);