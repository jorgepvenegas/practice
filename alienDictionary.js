const dictionary = [
  "wert",
  "wer",
  "war",
  "come",
  "cos"
];


const alien = dictionary => {
  const g = {};
  const inDegree = {};
  for(let word of dictionary) {
    for(let char of word) {
      g[char] = new Set();
      inDegree[char] = 0;
    }
  };

  dictionary.reduce((prev, curr) => {
    let compareUntil = Math.min(prev.length, curr.length);
    for(let i = 0; i < compareUntil; i++) {
      let s1 = prev[i];
      let s2 = curr[i];
      if(s1 !== s2) {
        if(!g[s1].has(s2)) {
          g[s1].add(s2);
          inDegree[s2]++;
        }
        break;
      }
    }
    return curr;
  });


  const queue = [];
  let s = '';



  for(let c in inDegree) {
    if(inDegree[c] === 0) {
      queue.push(c);
    }
  }

  while(queue.length) {
    const char = queue.shift();
    s += char;
    [...g[char]].forEach( outgoing => {
      inDegree[outgoing]--;
      if(inDegree[outgoing] === 0) {
        queue.push(outgoing);
      }
    });
  }
  return s;
}

console.log(alien(dictionary));