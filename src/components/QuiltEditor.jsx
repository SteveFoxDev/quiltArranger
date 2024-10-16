import ColorPicker from './ColorPicker';
import { useSelector, useDispatch } from 'react-redux';
import { changeQuiltColors } from '../store/slices/quiltSlice';

const QuiltEditor = () => {
  const dispatch = useDispatch();

  const handleChange = (e, num) => {
    e.preventDefault();
    const color = e.target.value;
    dispatch(changeQuiltColors({ num, color }));
  };

  const colors = useSelector((state) => state.quilt.colors);
  return (
    <div className='mb-2'>
      <div className='d-flex flex-wrap'></div>
      <div className='d-flex flex-wrap justify-content-around gap-1'>
        {colors.map((color) => (
          <ColorPicker key={color.num} color={color} onChange={handleChange}/>
        ))}
      </div>
    </div>
  );
};

export default QuiltEditor;
