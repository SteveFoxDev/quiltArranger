import { useSelector } from "react-redux";

const QuiltDisplay = ({ quilt, className }) => {
  const bgColor = useSelector((state) => state.quilt.bgColor);
  const renderedQuilt = quilt.map((row, index) => {
    return (
      <div key={index} className='row flex flex-nowrap'>
        {row.map((tile, i) => {
          return (
            <div
              key={`${index}${i}`}
              className='col border ratio ratio-1x1 d-inline-flex align-items-center justify-content-center p-0'
              style={{
                backgroundColor: {bgColor} && `${tile.hex}`,
              }}
              onClick={() => console.log(quilt[index][i])}
            >
              {tile.num}
            </div>
          );
        })}
      </div>
    );
  });

  return <div className={`container mb-5 ${className || ''}`}>{renderedQuilt}</div>;
};

export default QuiltDisplay;
