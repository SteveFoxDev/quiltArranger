import { TfiLayoutColumn3Alt } from 'react-icons/tfi';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';

const NumberInput = ({ name, errors, register, className, ...props }) => {
  let renderedIcon;
  if (name === 'columns') {
    renderedIcon = <TfiLayoutColumn3Alt className='fs-2 input-icon' />;
  } else if (name === 'rows') {
    renderedIcon = (
      <TfiLayoutColumn3Alt className='fs-2 input-icon rotate' />
    );
  } else if (name === 'fabrics') {
    renderedIcon = <TfiLayoutGrid3Alt className='fs-2 input-icon' />;
  }

  const validationOptions = {
    required: 'cannot be blank',
    valueAsNumber: true,
    min: {
      value: 2,
      message: 'must be 2 or more',
    },
  };

  return (
    <div className='input-group mb-3'>
      <span className='input-group-text'>{renderedIcon}</span>
      <div className='form-floating'>
        <input
          className={`form-control ${errors && 'border-danger'} ${
            className || ''
          }`}
          type='number'
          id={name}
          inputMode='numeric'
          min={2}
          placeholder={name}
          {...register(name, validationOptions)}
          {...props}
        />
        <label className={`${errors && 'text-danger'}`} htmlFor={name}>
          {name} {errors && errors.message}
        </label>
      </div>
    </div>
  );
};

export default NumberInput;
