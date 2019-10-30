var lengthOfLongestSubstring = function(s) {
  let substring = "";
  let largest = 0;
  let store = {};
  let count = 0;
  let index = 0;
  while(count < s.length && s.length !== index) {
      if(substring.includes(s[index])) {
          store[substring] = substring.length;
          substring = "";
          count++;
          index = count;
      }
      else{
          substring = substring.concat(s[index]);
          index++
      }
  }
  if(substring.length) {
    store[substring] = substring.length;
  }

  Object.keys(store).forEach( e => {
    largest = Math.max(store[e], largest);
  })
  
  return largest;
};


lengthOfLongestSubstring("dvdf");