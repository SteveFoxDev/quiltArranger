import { useSelector } from 'react-redux';
import QuiltDisplay from '../components/QuiltDisplay';
import QuiltCreateForm from '../components/QuiltCreateForm';
import QuiltEditor from '../components/QuiltEditor';
import Modal from '../components/Modal';
import QuiltModalBody from '../components/QuiltModalBody';

const QuiltPage = () => {
  const quilt = useSelector((state) => state.quilt.quilt);
  const showModal = useSelector((state) => state.quilt.showModal);

  return (
    <div className='container'>
      <QuiltCreateForm />
      <QuiltEditor />
      {showModal && <Modal ><QuiltModalBody /></Modal>}
      <QuiltDisplay quilt={quilt || []} />
    </div>
  );
};

export default QuiltPage;
