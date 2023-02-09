/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @title 反转链表
 * @url https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/
 */
const reverseList = function(head) {
  let tmp = head
  const reverse = (node, pre) => {
    if (!node) return
    const res = reverse(node.next, node)
    // console.log(node, pre)
    // if (!node.next) {
    //   tmp = node
    // }
    node.next = pre
    return res
  }
  return reverse(head, null)
  // return tmp
};

/**
 * 迭代
 * @param head
 */
const reverseListWithIteration = function(head) {
  if (!head) return null
  let cur = head
  let pre = null

  while (cur !== null) {
    let tmp = cur.next
    cur.next = pre
    pre = cur
    cur = tmp
  }
  return pre
}

function ListNode(val, next) {
  this.val = val;
  this.next = next
}
const n5 = new ListNode(5, null)
const n4 = new ListNode(4, n5)
const n3 = new ListNode(3, n4)
const n2 = new ListNode(2, n3)
const n1 = new ListNode(1, n2)

// console.log(reverseList(n1))
console.log(reverseListWithIteration())
