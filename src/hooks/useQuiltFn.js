import { useState } from 'react';
import quiltArray from '../utilities/quiltArray';
import shuffleArray from '../utilities/shuffleArray';
import colorChange from '../utilities/colorChange';

function useQuiltFn() {
  const [quilt, setQuilt] = useState([]);

  function quiltFn(cols, rows, fabrics) {
    const {quiltArr, colors} = quiltArray(cols, rows, fabrics);
    const shuffledQuilt = shuffleArray(quiltArr, cols, rows);
    setQuilt({shuffledQuilt, colors});
  }

  function changeColor(num, color) {
    const { changedQuilt, changedColors } = colorChange(quilt, num, color);
    setQuilt({shuffledQuilt: changedQuilt, colors: changedColors });
  }

  return [quiltFn, quilt, changeColor];
}
export default useQuiltFn;
