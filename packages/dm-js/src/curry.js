// 第一版
// var curry = function (fn) {
//   // 约等于 arguments.slice(1), 去掉第一个参数
//   var args = [].slice.call(arguments, 1);
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments));
//     return fn.apply(this, newArgs);
//   };
// };

// 第二版
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry(fn, length) {
  // Function.length -- 指明函数的形参个数
  // arguments.length -- 函数被调用时实际传参的个数
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function() {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

var fn0 = function(a, b, c, d) {
  return [a, b, c, d];
}

var fn1 = curry(fn0);

fn1("a", "b")("c")("d")