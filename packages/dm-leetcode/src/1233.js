/**
 * @param {string[]} folder
 * @return {string[]}
 * @title 删除子文件夹
 * @url https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
 */
const removeSubfolders = function (folder) {
  const list = []
  const getParent = (str) => {
    let arr = str.split('/')
    arr = arr.slice(1, arr.length - 1)
    let last = ''
    return arr.reduce((pre, cur) => {
      pre.push(`${last}/${cur}`)
      last = `${last}/${cur}`
      return pre
    }, [])
  }
  folder.forEach(e => {
    const res = getParent(e)
    if (!res.some(e => folder.includes(e))) {
      list.push(e)
    }
  })
  return list
};

// const folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
// const folder = ["/a","/a/b/c","/a/b/d"]
// const folder = ["/a/b/c","/a/b/ca","/a/b/d"]
const folder = ["/aa/ab/ac/ad", "/aa/aq/ay", "/bf/bv/cd/ch/cj", "/bf/bg", "/aa/aq/ar", "/bf", "/aa/ab/aj/an/ao", "/aa/aq/ay/az", "/aa/aq/ay/bc", "/bf/bg/bh/bi/bj", "/bf/bv/bw/ca/cc", "/bf/bg/bh/bl"]
// ["/aa/ab/ac/ad","/aa/ab/aj/an/ao","/aa/aq/ar","/aa/aq/ay","/bf"]
console.log(removeSubfolders(folder))
