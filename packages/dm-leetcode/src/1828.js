/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 * @url https://leetcode.cn/problems/queries-on-number-of-points-inside-a-circle/
 */
const countPoints = function(points, queries) {
  return queries.map(([x,y, r]) => {
    const arr = points.filter(([a, b]) => (x - a) * (x - a) + (y - b) * (y - b) <= r * r)
    return arr.length
  })
};

// const points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
const points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
console.log(countPoints(points, queries))
