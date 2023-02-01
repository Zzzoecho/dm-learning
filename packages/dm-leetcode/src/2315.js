/**
 * @param {string} s
 * @return {number}
 * @url https://leetcode.cn/problems/count-asterisks/
 */
const countAsterisks = function(s) {
  if (!s.includes('*')) return 0

  const arr = s.split('|')
  return arr.reduce((pre, cur, index) => {
    if (index % 2 !== 0) return pre
    const len = cur.length
    const lenWithoutLine = cur.replaceAll('*', '').length
    pre += len-lenWithoutLine
    return pre
  }, 0)
};

const s = '*jsaxclgfcyjds'
// const s = "l|*e*et|c**o|*de|"
// const s = "iamprogrammer"
// const s = "yo|uar|e**|b|e***au|tifu|l"
console.log(countAsterisks(s))
