import rgbHex from "rgb-hex";

const random = () => Math.floor(Math.random() * 256);
const color = () => `rgb(${random()}, ${random()}, ${random()})`;

const quiltArray = (cols, rows, fabrics) => {
  // Array of fabrics/patterns
  const colors = Array.from({ length: fabrics }, (_, i) => ({
    num: i + 1,
    color: `#${rgbHex(color())}`,
  }));
  // counter to reset pattern in loop
  let counter = 0;
  // loop over fabric colors
  const colorLooper = () => {
    if (counter > colors.length - 1) {
      counter = 0;
    }
    const hex = colors[counter].color;
    const num = colors[counter].num;
    counter += 1;
    return { hex, num };
  };
  // create Array of arrays (array of rows)
  const quiltArr = Array.from({ length: rows }, () => {
    return Array.from({ length: cols }, () => colorLooper());
  });
  return {quiltArr, colors};
};

export default quiltArray;
