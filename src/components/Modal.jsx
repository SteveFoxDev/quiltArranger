import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../store/slices/quiltSlice';
import { MdClose } from 'react-icons/md';
import './Modal.css';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const content = (
    <div>
      <div
        className='modal-backdrop'
        onClick={() => dispatch(closeModal())}
      ></div>
      <div className='modal-popup shadow-lg'>
        <div className='modal-close'>
          <button
            className='fs-1 d-flex align-items-center m-0 p-0'
            onClick={() => dispatch(closeModal())}
          >
            <MdClose />
          </button>
        </div>
        <div className='modal-body'>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.querySelector('.modal-container'));
};

export default Modal;
