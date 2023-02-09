/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * @title 从尾到头打印链表
 * @url https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 */
const reversePrint = function(head) {
  if (!head) return []
  let arr = []
  // 递归，利用执行栈。只要有 next 就会往执行栈推入一个 recur，直到 node === null 时，开始依次出栈
  const recur = (node) => {
    if (!node) return
    recur(node.next)
    arr.push(node.val)
  }
  recur(head)

  return arr
};

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

const n3 = new ListNode(2, null)
const n2 = new ListNode(3, n3)
const n1 = new ListNode(1, n2)

reversePrint(n1)
