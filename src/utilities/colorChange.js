const colorChange = (quiltArr, colorArr, num, color) => {
  const changedQuilt = quiltArr.map((row) => {
    return row.map((quiltBlock) => {
      if (quiltBlock.num === num) {
        return { ...quiltBlock, hex: color };
      } else {
        return quiltBlock;
      }
    });
  });
  const changedColors = colorArr.map((c) => {
    if (c.num === num) {
      return { ...c, color };
    } else {
      return c;
    }
  });

  return { changedQuilt, changedColors };
};

export default colorChange;
