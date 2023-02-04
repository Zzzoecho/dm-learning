/**
 * @param {string} s
 * @return {string}
 * @url https://leetcode.cn/problems/greatest-english-letter-in-upper-and-lower-case/
 */
const greatestLetter = function(s) {
    const display = [...s]
        .map(e => String.fromCharCode(e.charCodeAt() - ('a'.charCodeAt() - 'A'.charCodeAt())))
        .filter(e => s.includes(e))
        .map(e => e.charCodeAt())
    // console.log(display, Math.max(...display))
    if (display.length === 0) return ''
    return String.fromCharCode(Math.max(...display))
};

// const s = "lEeTcOdE"
// const s = "arRAzFif"
const s = "AbCdEfGhIjK"
console.log(greatestLetter(s))