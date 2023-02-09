function TreeNode (val, left, right) {
  this.value = val
  this.left = left
  this.right = right
}

const n6 = new TreeNode(6, null, null)
const n5 = new TreeNode(5, null, null)
const n4 = new TreeNode(4, null, null)
const n3 = new TreeNode(3, null, null)
const n2 = new TreeNode(2, n5, n6)
const n1 = new TreeNode(1, n3, n4)
const n0 = new TreeNode(0, n1, n2)

/**
 * 层序遍历
 * @param root
 * @returns {*[]}
 */
function hierarchicalOrder (root) {
  let list = []
  let queue = [root]

  while (queue.length > 0) {
    const node = queue.shift()
    list.push(node.value)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return list
}

console.log(hierarchicalOrder(n0))

const postOrder = (node) => {
  if (node === null) return
  postOrder(node.left)
  postOrder(node.right)
  list.push(node.val)
}
