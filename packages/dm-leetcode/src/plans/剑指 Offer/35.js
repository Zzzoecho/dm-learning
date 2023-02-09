/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * @title 复制一个复杂链表，同 138 题
 * @url https://leetcode.cn/problems/copy-list-with-random-pointer/
 */
const copyRandomList = function(head) {
  let node = head
  let map = new Map()
  while (node) {
    map.set(node, new Node(node.val))
    node = node.next
  }
  node = head
  console.log(map)
  while (node) {

  }
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}
var n5 = new Node(5, null, n1)
var n4 = new Node(4, n5, n3)
var n3 = new Node(3, n4, n5)
var n2 = new Node(2, n3, n1)
var n1 = new Node(1, n2, null)
console.log(copyRandomList(n1))
