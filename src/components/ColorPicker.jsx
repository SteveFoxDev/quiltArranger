const ColorPicker = ({ color, onChange, ...rest }) => {
  return (
    <div className='input-group color-picker'>
      <span className='input-group-text'>{color.num}</span>
      <input
        type='color'
        value={color.color}
        id={`color${color.num}`}
        className='form-control form-control-color'
        onChange={(e) => onChange(e, color.num)}
        {...rest}
      />
    </div>
  );
};

export default ColorPicker;
