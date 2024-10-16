import { useSelector } from 'react-redux';
import QuiltDisplay from '../components/QuiltDisplay';
import QuiltCreateForm from '../components/QuiltCreateForm';
import QuiltEditForm from '../components/QuiltEditForm';

const QuiltPage = () => {
  const quilt = useSelector((state) => state.quilt.quilt);

  return (
    <div className='container'>
      <QuiltCreateForm />
      <QuiltEditForm />
      <QuiltDisplay quilt={quilt || []} />
    </div>
  );
};

export default QuiltPage;
