/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = [Number.MAX_SAFE_INTEGER] // 辅助栈，保存当前最小的值
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 * @url https://leetcode.cn/problems/bao-han-minhan-shu-de-zhan-lcof
 */
const obj = new MinStack()
console.log(obj.push(-2)
,obj.push(0)
,obj.push(-3)
,obj.min()
,obj.pop()
,obj.top()
,obj.min())
