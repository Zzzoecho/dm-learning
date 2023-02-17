/**
 * @param {number[]} nums
 * @return {boolean}
 * @title 检查「好数组」
 * @url https://leetcode.cn/problems/check-if-it-is-a-good-array/
 * 裴蜀定理 https://baike.baidu.com/item/%E8%A3%B4%E8%9C%80%E5%AE%9A%E7%90%86/5186593
 * 对于任意整数 a，b 和它们的最大公约数 d，当 m 是 d 的倍数时，ax + by = m 有解
 * 题目等价于求 nums 中全部数字的最大公约数是否等于 1
 */
var isGoodArray = function(nums) {
  let divisor = nums[0]
  for (let i = 1; i < nums.length; i++) {
    divisor = gcd(divisor, nums[i])

    // 优化：如果出现最大公约数为 1 的情况，因为 1 和 任何正整数的最大公约数都是 1.所以可以提前结束遍历
    if (divisor === 1) {
      break
    }
  }

  return divisor === 1
};

/**
 * 辗转相除法，求最大公约数
 * 用一个数除以另一个数（不需要知道大小），取余，再用被除数除以余数，重复直到余数为 0
 * @param a
 * @param b
 */
const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

const nums = [12,5,7,23]
// const nums = [29, 6, 10]
// const nums = [3, 6]
console.log(isGoodArray(nums))
