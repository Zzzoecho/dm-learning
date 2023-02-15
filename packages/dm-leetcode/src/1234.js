/**
 * @param {string} s
 * @return {number}
 * @title 替换子串得到平衡字符串
 * @url https://leetcode.cn/problems/replace-the-substring-for-balanced-string/
 */
const balancedString = function(s) {
  const map = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0,
  }
  // 计算 s 中各个字母的 count
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] + 1
  }

  const m = s.length / 4
  let res = s.length
  // 由题干可知：s.length 是 4 的倍数且只有出现 Q、W、E、R 四个字母，所以只要这四个字母没有一个超过 1/4。替换后就是平衡的
  const check = () => {
    if (map['Q'] > m || map['W'] > m || map['E'] > m || map['R'] > m) {
      return false
    }
    return true
  }

  if (check()) {
    return 0
  }
  // 双指针
  for (let l = 0, r = 0; l < s.length; l++) {
    while (r < s.length && !check()) {
      map[s[r]] = map[s[r]] - 1
      r++
    }
    if (!check()) {
      break
    }
    console.log('符合', l, r)
    res = Math.min(res, r - l)
    // left 往右走，看看能不能缩短
    map[s[l]] = map[s[l]] + 1
  }
  return res
};

// const s = "QWER"
// const s = "QQWE"
// const s = "QQQW"
const s = "QQQQ"
console.log(balancedString(s))
