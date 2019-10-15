module.exports = function solveSudoku(matrix) {

  let numeral = searchZero(matrix);
  let row = numeral[0];
  let colum = numeral[1];

  if (row == null) return matrix;

  for (let number = 1; number <= 9; number++) {
      if ( noConflicts(matrix, row, colum, number) ) {
        matrix[row][colum] = number;
          if ( solveSudoku(matrix, row, colum)) return matrix;
          matrix[row][colum] = 0;
      }
  }
}

function searchZero(matrix) {
  let row = 0;
  let colum = 0;

    for (; row < 9 ; colum = 0, row++) for (; colum < 9 ; colum++) if (matrix[row][colum] == 0) return [row, colum];
    return [null, null];
}

function noConflicts(matrix, row, colum, number) {
  return isRowOk(matrix, row, number) && iscolumOk(matrix, colum, number) && isBoxOk(matrix, row, colum, number);
}

function isRowOk(matrix, row, number) {
  for (let colum = 0; colum < 9; colum++) if (matrix[row][colum] == number) return false;

  return true;
}

function iscolumOk(matrix, colum, number) {
  for (let row = 0; row < 9; row++) if (matrix[row][colum] == number) return false;

  return true;
}

function isBoxOk(matrix, row, colum, number) {
  row = Math.floor(row / 3) * 3;
  colum = Math.floor(colum / 3) * 3;

  for (let checkingRow = 0; checkingRow < 3; checkingRow++) for (let checkingColum = 0; checkingColum < 3; checkingColum++)
  if (matrix[row + checkingRow][colum + checkingColum] == number) return false;

  return true;
}
