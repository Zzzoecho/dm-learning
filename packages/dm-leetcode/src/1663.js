/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * @url https://leetcode.cn/problems/smallest-string-with-a-given-numeric-value/
 */
const getSmallestString = function(n, k) {
    if (n * 26 < k) return ''

    let str = ''
    for (let i = 1; i <= n; i++) {
        const lower = Math.max(1, k - (n - i) * 26)
        console.log(lower)
        k -= lower
        str += String.fromCharCode('a'.charCodeAt() + lower - 1)
    }
    return str
};

// const x = 3, y = 3
const x = 5, y = 73

// const x = 23100, y = 567226
console.log(getSmallestString(x, y))
