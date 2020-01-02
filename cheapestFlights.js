var findCheapestPrice = function(n, flights, src, dst, K) {
  let map = new Map();
  
  for (let i = 0; i < flights.length; i++) {
      const [start, end, price] = flights[i];
      let edges = map.get(start) || [];
      edges.push([end, price]);
      map.set(start, edges);
  }
  
  let queue = [[0, src, K + 1]];
  
  while (queue.length) {
      const [price, city, stops] = queue.shift();
      if (city === dst) return price;
      if (stops > 0) {
          const nextFlights = map.get(city) || [];
          for (let i = 0; i < nextFlights.length; i++) {
              const [next, cost] = nextFlights[i];
              queue.push([cost + price, next, stops - 1]);
          }
          queue.sort((a, b) => a[0] - b[0]);
      }
  }
  
  return -1;
};

const n = 3;
const edges = [[0,1,100],[1,2,100],[0,2,500]];
const src = 0;
const dst = 2;
const k = 1;

console.log(findCheapestPrice(n, edges, src, dst, k));