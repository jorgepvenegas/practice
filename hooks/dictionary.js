const alienOrder = (words) => {
  // Build graph
  const g = {};
  const inDegrees = {};

  for (const w of words) {
    for (const c of w) {
      inDegrees[c] = 0;
      g[c] = new Set();
    }
  }

  for (let i = 1; i < words.length; i++) {
    const w1 = words[i - 1];
    const w2 = words[i];

    const len = Math.min(w1.length, w2.length);
    for (let j = 0; j < len; j++) {
      const c1 = w1[j];
      const c2 = w2[j];

      if (c1 !== c2) {
        if (!g[c1].has(c2)) {
          g[c1].add(c2);
          inDegrees[c2]++;
        }
        break;
      }
    }
  }
  
  console.log(g)
}

alienOrder(["wrt", "wrf", "er", "ett", "rftt"]);