import quiltArray from "./quiltArray";
import shuffleArray from "./shuffleArray";

const createShuffledQuilt = (cols, rows, fabrics) => {
    const {quiltArr, colors} = quiltArray(cols, rows, fabrics);
    const shuffledQuilt = shuffleArray(quiltArr, cols, rows);
    return {shuffledQuilt, colors};
}

export default createShuffledQuilt;