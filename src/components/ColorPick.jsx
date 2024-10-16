import { useDispatch } from 'react-redux';
import { changeQuiltColors } from '../store/slices/quiltSlice';

const ColorPick = ({ color }) => {
  const dispatch = useDispatch();

  const handleChange = (e, num) => {
    e.preventDefault();
    const color = e.target.value;
    dispatch(changeQuiltColors({ num, color }));
  };

  return (
    <div className='input-group color-picker'>
      <span className='input-group-text'>{color.num}</span>
      <input
        type='color'
        value={color.color}
        id={`color${color.num}`}
        className='form-control form-control-color'
        onChange={(e) => handleChange(e, color.num)}
      />
    </div>
  );
};

export default ColorPick;
