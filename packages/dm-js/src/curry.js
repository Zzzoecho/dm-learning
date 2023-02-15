// 第一版
// var curry = function (fn) {
//   // 约等于 arguments.slice(1), 去掉第一个参数
//   var args = [].slice.call(arguments, 1);
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments));
//     return fn.apply(this, newArgs);
//   };
// };
function sub_curry(fn){
  return function(){
    return fn()
  }
}

function curry(fn, length){
  length = length || 4;
  return function(){
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    }
    else {
      return fn()
    }
  }
}

var fn0 = function(){
  console.log(1)
}

var fn1 = curry(fn0)

fn1()
// fn1()()()() // 1

function add(a, b) {
  return a + b;
}

// const addCurry = curry(add, 1, 2);
// addCurry() // 3
//或者
// var addCurry = curry(add, 1);
// addCurry(2) // 3
// //或者
// var addCurry = curry(add);
// addCurry(1, 2) // 3
