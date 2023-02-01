/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function(logs, k) {
  const idMap = logs.reduce((pre,cur) => {
    const id = cur[0]
    const minute = cur[1]
    if (pre.has(id)) {
      const curSet = pre.get(id)
      curSet.add(minute)
    } else {
      pre.set(id, new Set().add(minute))
    }
    return pre
  }, new Map())

  const arr = new Array(k).fill(0);
  [...idMap.values()].map(e => e.size).forEach(e => {
    arr[e - 1] += 1
  })

  return arr
};

// const logs = [[0,5],[1,2],[0,2],[0,5],[1,3]], k = 5
const logs = [[1,1],[2,2],[2,3]], k = 4
findingUsersActiveMinutes(logs, k)
