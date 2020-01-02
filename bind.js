Function.prototype.bind = function(context) {
  const fn = this;
  return function() {
    fn.apply(context, [...arguments]);
  }
}


function binder(fn, context) {
  return function() {
    console.log([...arguments]);
    fn.call(context);
  }
}

const foo = function (a, b, c) {
  console.log(this, [...arguments])
}

let bound = foo.bind({bar: "Hey"}, [1,2,3,4]);

// let bound = binder(foo, {bar: "Hey!"});

bound(1, 2, 3);