Function.prototype.call2 = function(ctx, ...args) {
  ctx = ctx || window

  let fn = Symbol()
  ctx[fn] = this
  let res = ctx[fn](...args)
  delete ctx[fn]
  return res
}

Function.prototype.Call = function(context, ...args) {
  // context为undefined或null时，则this默认指向全局window
  if (!context || context === null) {
    context = window;
  }
  let fn = Symbol();
  console.log('this', this);
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
};


Function.prototype.call2 = function(ctx, ...args) {
  ctx = ctx || window
  // var argus = []
  // for(var i = 1; i< arguments.length; i++) {
  //   argus.push('arguments[' + i + ']')
  // }
  console.log('this', this);

  ctx.fn = this
  let result = eval('ctx.fn(' + [...args] + ')')
  delete ctx.fn

  return result
}
