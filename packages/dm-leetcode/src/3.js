/**
 * 无重复字符的最长子串
 * @param s
 * @returns {number}
 * @url https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;
  let max = 0;
  let letterMap = new Map();

  for (let start = 0, end = 0; end < s.length; end++) {
    const char = s[end];
    if (
      letterMap.has(char) &&
      letterMap.get(char) >=
        start /* letterMap 应该删除掉 start 之前 全部的数据， 所以这里判断了下 要 >= start*/
    ) {
      // 计算 max 要提前计算, 否则, 后面 start 和 end 的值会改变，影响思路
      max = Math.max(max, end - start);
      // start = 重复字符的位置 + 1, 跳过重复字符
      start = letterMap.get(char) + 1;
    }
    // 更新字符位置
    letterMap.set(char, end);

    if (end == s.length - 1) {
      max = Math.max(max, end - start + 1);
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabc") === 3);
console.log(lengthOfLongestSubstring("abcdefc") === 6);
console.log(lengthOfLongestSubstring("au") === 2);
console.log(lengthOfLongestSubstring("pwwkew") === 3);
console.log(lengthOfLongestSubstring(" ") === 1);
console.log(lengthOfLongestSubstring("abba") === 2);
console.log(lengthOfLongestSubstring("abcabcbb") === 3);
console.log(lengthOfLongestSubstring("tmmzuxt") === 5);
