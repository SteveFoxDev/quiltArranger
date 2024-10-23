import { TbPrinter } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
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
      <Tooltip id='option-tooltip' className='tooltip'/>
      <a 
        data-tooltip-id='option-tooltip'
        data-tooltip-content='Click to turn color on/off'
        data-tooltip-place='right'
        data-tooltip-variant='info'
      >
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
      </a>
      <a
        data-tooltip-id='option-tooltip'
        data-tooltip-content='Click to print quilt'
        data-tooltip-place='left'
        data-tooltip-variant='info'
      >
        <div>
          <button onClick={handleClick} className='btn btn-custom py-1'>
            <TbPrinter />
          </button>
        </div>
      </a>
    </div>
  );
};

export default QuiltOptions;
