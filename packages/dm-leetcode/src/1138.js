/**
 * @param {string} target
 * @return {string}
 */
const alphabetBoardPath = function(target) {
  const board = [...["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"].join('')]
  const point = [0, 0]
  const path = []

  const move = (row, col) => {
    const x = row - point[0]
    const y = col - point[1]
    if (x === 0 && y === 0) {
      path.push('!')
      return
    }
    console.log(`[${point}] -> [${row}, ${col}]`, x, y);
    path.push(...new Array(Math.abs(x)).fill(x > 0 ? 'D' : 'U'))
    path.push(...new Array(Math.abs(y)).fill(y > 0 ? 'R' : 'L'))
    path.push('!')
    point[0] = row
    point[1] = col
  }

  for (let i = 0; i < target.length; i++) {
    const letter = target[i];
    const index = board.findIndex(v => v === letter)
    const row = Math.floor(index / 5)
    const col = index % 5
    console.log(letter, `[${row}, ${col}]`);
    move(row, col)
    console.log(path);
  }

  return path.join('')
};

// const target = "leet"
// const target = "code"
const target = "zdz" // DDDDD!UUUUURRR!DDDDLLLD!
console.log(alphabetBoardPath(target));