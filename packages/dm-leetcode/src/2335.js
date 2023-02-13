/**
 * @param {number[]} amount
 * @return {number}
 * @title 装满杯子需要的最短总时长
 * @url https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups/
 */
const fillCups = function(amount) {
  let sortArr = amount.sort((a, b) => a - b);
  if (sortArr[2] >=  sortArr[0] + sortArr[1]) {
    return sortArr[2]
  } else {
    const remain = sortArr[2] - Math.abs(sortArr[0]-sortArr[1])
    return sortArr[2] + (sortArr[0] - Math.floor(remain / 2))
  }
};

// const amount = [1, 4, 2];
// const amount = [5,4,4]
// const amount = [5,0,0]
const amount = [5,3,5]
console.log(fillCups(amount));