/**
 * @param {number[]} obstacles
 * @return {number}
 * @url https://leetcode.cn/problems/minimum-sideway-jumps/
 */
const minSideJumps = function(obstacles) {
  let len = obstacles.length
  let index = 0 // 当前位置
  let step = 0 // 侧跳次数
  let curWay = 2 // 当前跑道

  while (index < len-1) {
    // 没有遇到阻碍，一直前进
    if (obstacles[index + 1] !== curWay) {
      console.log(`${index} 可以继续`)
      index++
      continue
    }

    // 遇到阻碍去别的能走最远的道
    let way1 = (curWay + 1) % 3
    let way2 = (curWay + 2) % 3

    way1 = way1 === 0 ? 3 : way1
    way2 = way2 === 0 ? 3 : way2

    let j = index
    while (j < len - 1 && obstacles[j] !== way1) {
      j++
    }
    while (index < len - 1 && obstacles[index] !== way2) {
      index++
    }
    console.log(`j: ${j}, index: ${index}`)

    curWay = j > index ? way1 : way2

    index = Math.max(index, j) - 1
    step++
  }
  console.log(`侧跳次数: ${step}`)
  return step
};

// const obstacles = [0,1,2,3,0]
// const obstacles = [0,1,1,3,3,0]
const obstacles = [0,2,1,0,3,0]
minSideJumps(obstacles)
