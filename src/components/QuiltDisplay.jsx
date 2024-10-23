import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useSelector, useDispatch } from 'react-redux';
import { PiSwapLight } from 'react-icons/pi';
import { openModal } from '../store/slices/quiltSlice';
import { setJustClicked, deSelectBlock } from '../store/slices/quiltSlice';
import PrintableQuilt from './PrintableQuilt';
import QuiltOptions from './QuiltOptions';

const QuiltDisplay = ({ quilt, className }) => {
  const { bgColor } = useSelector((state) => state.quilt);
  const dispatch = useDispatch();

  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({contentRef});

  const handleClick = (row, block, color, num) => {
    const clicked = { row, block, color, num };

    if (quilt[row][block].selected === true) {
      return dispatch(deSelectBlock(clicked));
    } else {
      dispatch(setJustClicked(clicked));
      return dispatch(openModal());
    }
  };

  const renderedQuilt = quilt.map((row, index) => {
    return (
      <div key={index} className='row flex flex-nowrap'>
        {row.map((tile, i) => {
          return (
            <div
              key={`${index}${i}`}
              className='col border ratio ratio-1x1 d-inline-flex align-items-center justify-content-center p-0 cursor-pointer'
              style={{
                backgroundColor: bgColor
                  ? `${tile.hex}${tile.selected ? 75 : ''}`
                  : 'rgb(255, 255, 255)',
              }}
              onClick={() => handleClick(index, i, tile.hex, tile.num)}
            >
              {tile.selected ? (
                <PiSwapLight className='icon-green' />
              ) : (
                tile.num
              )}
            </div>
          );
        })}
      </div>
    );
  });

  QuiltDisplay.displayName = 'QuiltDisplay';

  return (
    <div>
      <QuiltOptions handlePrint={reactToPrintFn} />
      <PrintableQuilt ref={contentRef} className={className || ''}>
        {renderedQuilt}
      </PrintableQuilt>
    </div>
  );
};

export default QuiltDisplay;
