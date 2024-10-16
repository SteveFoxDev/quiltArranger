import ColorPick from './ColorPick';
import { useSelector } from 'react-redux';

const QuiltEditForm = () => {
  const colors = useSelector((state) => state.quilt.colors);
  return (
    <div className='mb-2'>
      <div className='d-flex flex-wrap'></div>
      <div className='d-flex flex-wrap justify-content-around gap-1'>
        {colors.map((color) => (
          <ColorPick key={color.num} color={color} />
        ))}
      </div>
    </div>
  );
};

export default QuiltEditForm;
