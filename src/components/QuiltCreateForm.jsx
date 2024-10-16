import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import NumberInput from './NumberInput';
import { createQuilt } from '../store/slices/quiltSlice';

const QuiltCreateForm = ({ className }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { columns: cols, rows, fabrics } = data;
    dispatch(createQuilt({ cols, rows, fabrics }));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`my-2 ${className || ''}`}
    >
      <div className='row'>
        <div className='col-md-4'>
          <NumberInput
            name='columns'
            errors={errors.columns}
            register={register}
          />
        </div>
        <div className='col-md-4'>
          <NumberInput name='rows' errors={errors.rows} register={register} />
        </div>
        <div className='col-md-4'>
          <NumberInput
            name='fabrics'
            errors={errors.fabrics}
            register={register}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit(onSubmit)}
        className='btn btn-lg btn-primary w-100'
      >
        Create Quilt
      </button>
    </form>
  );
};

export default QuiltCreateForm;
