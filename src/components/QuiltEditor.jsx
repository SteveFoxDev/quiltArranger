import { useSelector, useDispatch } from 'react-redux';
import { changeQuiltColors } from '../store/slices/quiltSlice';
import ColorPicker from './ColorPicker';
import Accordion from './Accordion';

const QuiltEditor = () => {
  const colors = useSelector((state) => state.quilt.colors);

  const dispatch = useDispatch();

  const handleChange = (e, num) => {
    e.preventDefault();
    const color = e.target.value;
    dispatch(changeQuiltColors({ num, color }));
  };

  const renderedText = 'Change colors for each number group.';
  const renderedContent = (
    <div className='container d-flex flex-wrap justify-content-start gap-1 accordion-content rounded-bottom'>
      {colors.map((color) => (
        <ColorPicker
          className='my-1'
          key={color.num}
          color={color}
          onChange={handleChange}
        />
      ))}
    </div>
  );

  return (
    <div className='mb-2'>
      <Accordion text={renderedText} content={renderedContent} />
    </div>
  );
};

export default QuiltEditor;
