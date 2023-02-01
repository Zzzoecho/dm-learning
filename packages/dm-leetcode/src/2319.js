/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const checkXMatrix = function(grid) {
  let isXMatrix = true
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      // 对角线
      if (i === j || i + j === row.length - 1) {
        if (row[j] === 0) isXMatrix = false
      } else {
        if (row[j] !== 0) isXMatrix = false
      }
    }
  }
  return isXMatrix
};

// const grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
const grid = [[5,7,0],[0,3,1],[0,5,0]]
console.log(checkXMatrix(grid))
