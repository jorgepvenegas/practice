// basic throttle implementation (trailing)

function Throttle(fn, time) {
  let nextTimeout = null;
  
  function delayed() {
    nextTimeout = null;
    fn();
  }

  return function() {
    if(!nextTimeout) {
      nextTimeout = setTimeout(delayed, time);
    }
  }
}

const regularFunction = () => {
  console.log('I just ran!');
}

// Create a throttled version of 'regularFunction'
// this will be called just once on every 1000 ms interval, so
// if 'throttledFn' is executed 100 times within 2000ms, it will run just twice
const throttledFn = new Throttle(regularFunction, 1000)

// Create an interval that runs every 300 ms
const myInterval = setInterval(() => {
  // console.log will be executed every 300ms
  console.log(new Date().toString());
  // throttledFn will run just once within 1000ms, regardless the multiple executions every 300ms
  throttledFn();
}, 300); 



// Test during 10 seconds
setTimeout(() => {
  clearInterval(myInterval);
}, 10*1000)

