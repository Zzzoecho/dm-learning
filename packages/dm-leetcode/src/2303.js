/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 * @url https://leetcode.cn/problems/calculate-amount-paid-in-taxes/
 */
const calculateTax = function(brackets, income) {
  if (income === 0) return 0

  let prev = 0
  return brackets.reduce((cost, [upper, percent]) => {
    let cur = Math.min(upper, income)
    cost += (cur - prev) * percent
    prev = cur
    return cost
  }, 0) / 100
};

// const brackets = [[3,50],[7,10],[12,25]], income = 10
const brackets = [[1,0],[4,25],[5,50]], income = 2
// const brackets = [[2,50]], income = 0
console.log(calculateTax(brackets, income))
