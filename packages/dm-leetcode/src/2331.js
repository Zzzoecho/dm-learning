/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * @title 计算布尔二叉树的值
 * @url https://leetcode.cn/problems/evaluate-boolean-binary-tree/
 */
const evaluateTree = function(root) {
  if (!root.left) return !!root.val

  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right)
  } else {
    return evaluateTree(root.left) && evaluateTree(root.right)
  }
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
// 2,1,3,null,null,0,1
const n4 = new TreeNode(1, null, null)
const n3 = new TreeNode(0, null, null)
const n2 = new TreeNode(3, n3, n4)
const n1 = new TreeNode(1, null, null)
const n0 = new TreeNode(2, n1, n2)

console.log(evaluateTree(n0))
