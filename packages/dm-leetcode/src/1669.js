/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 * @url https://leetcode.cn/problems/merge-in-between-linked-lists/
 */
const mergeInBetween = function(list1, a, b, list2) {
  let pointA = list1
  for (let i = 0; i < a - 1; i++) {
    pointA = pointA.next
  }
  let pointB = pointA;
  console.log('pointA', pointA)

  for (let i = 0; i < b - a + 2; i++) {
    pointB = pointB.next;
  }

  pointA.next = list2
  console.log('pointB', pointB)

  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = pointB;
  return list1;

  // console.log('pointB', pointB)
  // console.log('---------')
  // for (let i = 0; i < b; i++) {
  //   pointA = pointA.next
  // }
  // console.log('pointB', pointB)
  // console.log('after 2', pointA)

  // pointA.next = pointB

  // return pointA
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const point7 = new ListNode(6)
const point6 = new ListNode(5, point7)
const point5 = new ListNode(4, point6)
const point4 = new ListNode(3, point5)
const point3 = new ListNode(2, point4)
const point2 = new ListNode(1, point3)
const point1 = new ListNode(0, point2)

const two5 = new ListNode(1000004)
const two4 = new ListNode(1000003, two5)
const two3 = new ListNode(1000002, two4)
const two2 = new ListNode(1000001, two3)
const two1 = new ListNode(1000000, two2)
const list1 = point1, a = 2, b = 5, list2 = two1
console.log(mergeInBetween(list1, a, b, list2))
