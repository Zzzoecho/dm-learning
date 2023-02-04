const show = function (
  index,
  value,
  evenLeft,
  oddLeft,
  evenRight,
  oddRight
) {
  console.log(`${index}:value:${value}, evenLeft:${evenLeft}, oddLeft:${oddLeft}, evenRight:${evenRight}, oddRight:${oddRight}`)
}

/**
 * @param {number[]} nums
 * @return {number}
 * @url https://leetcode.cn/problems/ways-to-make-a-fair-array/
 */

const waysToMakeFair = function (nums) {
    let counts = 0

    let evenTotal = 0
    let oddTotal = 0
    let evenLeft = 0
    let evenRight = 0
    let oddLeft = 0
    let oddRight = 0

    let even = 0
    let odd = 0

    for (let i = 0; i < nums.length; i++) {
        if (isEven(i)) {
            evenTotal += nums[i]
        } else {
            oddTotal += nums[i]
        }
    }


    for (let i = 0; i < nums.length; i++) {

        evenRight = evenTotal - evenLeft
        oddRight = oddTotal - oddLeft
        even = evenLeft + oddRight
        odd = oddLeft + evenRight

        // show(i, nums[i], evenLeft, oddLeft, evenRight, oddRight)
        if (isEven(i)) {
            odd = odd - nums[i]
            evenLeft += nums[i]
        } else {
            even = even - nums[i]
            oddLeft += nums[i]
        }

        // console.log(`even:${even}, odd:${odd}`)

        if (even === odd) {
            counts++
        }


    }

    return counts
};


const isEven = (num) => num % 2 === 0

const nums = [2, 1, 6, 4]
// const nums = [1,1,1]
// const nums = [1,2,3]
console.log(waysToMakeFair(nums))