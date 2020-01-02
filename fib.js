
function fib(n) {
  const cache = {};
  return function(n) {
    if(n <= 1) return n;
    if(!cache[n]) {
      cache[n] = fib(n - 1) + fib(n - 2)
    }
    return cache[n];
  }
}


function memoize(fn) {
  let cache = {};
  return function(n) {
    if(n in cache) {
      console.log('Return from cache', n);
      return cache[n];
    }
    else {
      console.log('Calculating', n)
      cache[n] = fn(n);
      return cache[n];
    }
  }
}

const memoFib = memoize(fib);

console.time();
memoFib(1);
console.timeEnd();

console.time();
memoFib(10);
console.timeEnd();