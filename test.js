import { useState } from 'react';

const shuffleRow = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const random = () => Math.floor(Math.random() * 256);
const color = () => `rgb(${random()}, ${random()}, ${random()})`;

function useQuiltFn() {
  const [quilt, setQuilt] = useState([]);

  function quiltFn(cols, rows, patterns) {
    // Array of fabrics/patterns
    const colors = Array.from({ length: patterns }, (_, i) => ({
      num: i + 1,
      color: color(),
    }));
    // counter to reset pattern in loop
    let counter = 0;
    // loop over fabric colors
    const colorLooper = () => {
      if (counter > colors.length - 1) {
        counter = 0;
      }
      const rgb = colors[counter].color;
      const num = colors[counter].num;
      counter += 1;
      return { rgb, num };
    };
    // make large array of color/num objects
    const tempArray = Array(cols * rows)
      .fill({ num: 0, color: '' })
      .map(() => colorLooper());
    // create colorArr and push onto the values from colorHolder in arrays the size of cols
    const colorArr = [];
    for (let i = 0; i < tempArray.length; i += cols) {
      colorArr.push(tempArray.slice(i, i + cols));
    }

    // Shuffling Loops
    for (let i = 1; i < rows; i++) {
      let arranged = false;
      const nextRow = colorArr[i];
      const prevRow = colorArr[i - 1];
      shuffleRow(colorArr[i]);
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
          } else if (prevRow[j].num !== nextRow[j].num && j === cols - 1) {
            arranged = true;
          }
        }
      }
      setQuilt(colorArr);
    }
  }
  return [quiltFn, quilt];
}
export default useQuiltFn;

// <<<<<<<<<< ----------------- >>>>>>>>>>>>>>
// const colors = Array.from({length: patterns}, (_, i) => ({
//     num: i + 1,
//     color: color()
// }));
// let counter = 0;
// const colorLooper = () => {
//     if(counter > colors.length - 1){
//         counter = 0;
//       }
//       const rgb = colors[counter].color;
//       const num = colors[counter].num;
//       counter += 1;
//       return {rgb, num};
// }
// const colorArray = Array(48).fill({num: 0, color: ''}).map(() => colorLooper());

// import { useState } from 'react';

// const shuffle = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };

// const random = () => Math.floor(Math.random() * 256);
// const color = () => `rgb(${random()}, ${random()}, ${random()})`;

// function useQuiltFn() {
//   const [quilt, setQuilt] = useState([]);

//   function quiltFn(cols, rows, patterns) {
//     // create Color Array from patterns arg
//     const colors = Array.from({length: patterns}, () => color());
//     let colorArr = Array(cols).fill(0);

//     let mapper = 0;
//     for (let i = 0; i < (cols * rows); i++){
//       if(mapper > colors.length - 1){
//         mapper = 0;
//       }
//       const rgb = colors[mapper];
//       mapper += 1;
//       colorArr[i] = rgb;
//     }
//     // Create array and first nested array
//     const quiltArr = [
//       Array.from({ length: cols }, (_, i) => ({
//         num: i + 1,
//         color: colorArr ? colorArr[i] : '',
//         // color: color()
//       })),
//     ];

//     // For Each Row (nested array)
//     for (let i = 0; i < rows - 1; i++) {
//       //create next row (array)
//       const newArr = Array.from({ length: cols }, (_, index) => ({
//         num: index + 1,
//         color: colorArr ? colorArr[index] : '',
//       }));
//       let arranged = false;
//       // Shuffle row
//       shuffle(newArr);
//       //Check Arrangement
//       while (arranged === false) {
//         for (let j = 0; j < cols; j++) {
//           // if quilt block above is same then re-shuffle, set j to escape for loop
//           if (quiltArr[i][j].num === newArr[j].num) {
//             shuffle(newArr);
//             j = cols;
//             // else if the quilt block above is NOT same and its on last iteration
//             // set arranged to escape for and While Loops
//           } else if (quiltArr[i][j].num !== newArr[j].num && j === cols - 1) {
//             arranged = true;
//           }
//         }
//       }
//       // Add row (newArr) to quiltArr
//       quiltArr.push(newArr);
//     }
//     setQuilt(quiltArr);
//   }
//   return [quiltFn, quilt];
// }

// export default useQuiltFn;
