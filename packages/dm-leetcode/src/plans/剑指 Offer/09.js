/**
 * 用两个栈实现队列
 * 栈：先进后出，用数组只能用 push 和 pop 方法
 * 像玩汉诺塔
 * @url https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */
const CQueue = function() {
  this.inStack = []
  this.outStack = []
};

/**
 * @param {number} value
 * @return {void}
 * @url https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */
CQueue.prototype.appendTail = function(value) {
  this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  // 当 outStack 为空，说明可以输出正确顺序的栈空了。需要从 inStack 里再进点货
  if (this.outStack.length === 0) {
    if (this.inStack.length === 0) return -1
    while(this.inStack.length !== 0) {
      this.outStack.push(this.inStack.pop())
    }
  }
  return this.outStack.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
const obj = new CQueue();
console.log(obj.appendTail(3))
console.log(obj.deleteHead())
console.log(obj.deleteHead())
console.log(obj.deleteHead())

// const obj = new CQueue();
// obj.deleteHead()
// obj.appendTail(5)
// obj.appendTail(2)
// obj.deleteHead()
// obj.deleteHead()

