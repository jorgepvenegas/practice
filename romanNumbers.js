const VALUES = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

const romanToInt = function(s) {
  let total = 0;
  let i = 0;
  
  while(s.length > i) {
      if(s[i] === "I") {
          if(!!s[i+1] && (s[i+1] === "V" || s[i+1] === "X")) {
              total = total + (VALUES[s[i+1]] - VALUES[s[i]]);
              i++;
          }
          else{
            total = total + VALUES[s[i]];
          }
      }
      else if(s[i] === "X") {
          if(!!s[i+1] && (s[i+1] === "L" || s[i+1] === "C")) {
              total = total + (VALUES[s[i+1]] - VALUES[s[i]]);
              i++;
          }
          else{
            total = total + VALUES[s[i]];
          }
      }
      else if(s[i] === "C") {
          if(!!s[i+1] && (s[i+1] === "D" || s[i+1] === "M")) {
              total = total + (VALUES[s[i+1]] - VALUES[s[i]]);
              i++;
          }
          else{
            total = total + VALUES[s[i]];
          }
      }
      else{
        total = total + VALUES[s[i]];
      }
      
      
      i++;
  }
  return total;
};

console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MIII")); //1003