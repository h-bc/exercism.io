const Matrix = function(str) {
  const rows = this.extractMatrix(str);
  const columns = this.transpose(rows);

  return {
    rows,
    columns,
  };
};

Matrix.prototype.transpose = function(matrix) {
  let output = [];
  let rows = matrix[0].length;
  let columns = matrix.length;

  for (let i = 0; i < rows; i++) {
    output[i] = [];
    for (let j = 0; j < columns; j++) {
      output[i][j] = matrix[j][i];
    }
  }
  return output;
};

Matrix.prototype.extractMatrix = function(str) {
  return str.split('\n').map(row => {
    return row.split(' ').map(item => parseInt(item));
  });
};

module.exports = Matrix;
