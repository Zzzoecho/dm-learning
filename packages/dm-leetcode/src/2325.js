/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 * @url https://leetcode.cn/problems/decode-the-message/
 */
const decodeMessage = function(key, message) {
  let letterMap = {}
  let repeatCnt = 0
  key = key.replaceAll(' ', '');
  [...key].forEach((e, i) => {
    if (letterMap[e]) {
      repeatCnt++
      return
    }
    letterMap[e] = String.fromCharCode('a'.charCodeAt() + i - repeatCnt)
  })
  return [...message].map(e => {
    return letterMap[e] || '*'
  }).join('').replaceAll('*', ' ')
};

// const key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
const key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"

console.log(decodeMessage(key, message))
