import { useSelector, useDispatch } from 'react-redux';
import ColorPicker from './ColorPicker';
import DividerWithText from './DividerWithText';
import {
  swapBlocks,
  closeModal,
  selectBlock,
  changeBlockColor,
} from '../store/slices/quiltSlice';

const QuiltModalBody = () => {
  const { toBeSwapped, justClicked } = useSelector((state) => state.quilt);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const color = e.target.value;
    const { row, block } = justClicked;
    dispatch(changeBlockColor({ row, block, color }));
  };

  const swapConfirm = (
    <>
      <p>Are you sure you want to swap?</p>
      <div className=''>
        <button
          onClick={() => dispatch(swapBlocks())}
          className='m-1 btn btn-primary'
        >
          Yes
        </button>
        <button
          onClick={() => dispatch(closeModal())}
          className='m-1 btn btn-danger'
        >
          No
        </button>
      </div>
    </>
  );

  const swapOrEdit = (
    <>
      <p>Do you want to swap this block with another?</p>
      <button
        className='m-1 btn btn-primary'
        onClick={() => dispatch(selectBlock(justClicked))}
      >
        Swap
      </button>
      <button
        onClick={() => dispatch(closeModal())}
        className='m-1 btn btn-danger'
      >
        Cancel
      </button>
      <DividerWithText text='OR' />
      <p>Change color of this block only?</p>
      <div className='d-flex flex-wrap justify-content-center'>
        <ColorPicker
          color={justClicked}
          onChange={handleChange}
          onBlur={() => dispatch(closeModal())}
        />
      </div>
    </>
  );

  return (
    <div>
      {toBeSwapped && swapConfirm}
      {!toBeSwapped && swapOrEdit}
    </div>
  );
};

export default QuiltModalBody;
