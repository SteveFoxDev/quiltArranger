import { TbPrinter } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { setBgColor } from '../store/slices/quiltSlice';

const QuiltOptions = ({ handlePrint }) => {
  const dispatch = useDispatch();
  const bgColor = useSelector((state) => state.quilt.bgColor);

  const handleChange = (event) => {
    dispatch(setBgColor(event.target.checked));
  };

  const handleClick = () => {
    handlePrint();
  };

  return (
    <div className='container d-flex justify-content-between align-items-center mb-2'>
      <div className=' form-check form-switch'>
        <input
          onChange={(e) => handleChange(e)}
          type='checkbox'
          id='bgColorSwitch'
          className='form-check-input cursor-pointer check-switch'
          checked={bgColor}
        />
        <label htmlFor='bgColorSwitch' className='form-check-label'>
          Color
        </label>
      </div>
      <div>
        <button onClick={handleClick} className='btn btn-custom py-1'>
          <TbPrinter />
        </button>
      </div>
    </div>
  );
};

export default QuiltOptions;
