const shuffleRow = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const shuffleArray = (arr, cols, rows) => {
  // Shuffling Loops
  for (let i = 1; i < rows; i++) {
    let arranged = false;
    const nextRow = arr[i];
    const prevRow = arr[i - 1];
    shuffleRow(arr[i]);
    //Check Arrangement
    while (arranged === false) {
      for (let j = 0; j < cols; j++) {
        // if quilt block above is same then re-shuffle, set j to escape for loop
        if (prevRow[j].num === nextRow[j].num) {
          shuffleRow(nextRow);
          j = cols;
          // if quilt blocks side by side are same then re-shuffle
        } else if (j !== cols - 1 && nextRow[j].num === nextRow[j + 1].num) {
          shuffleRow(nextRow);
          j = cols;
        } else if (j === cols - 1) {
          arranged = true;
        }
      }
    }
  }
  return arr;
};

export default shuffleArray;
