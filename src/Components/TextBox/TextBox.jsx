import PropTypes from 'prop-types';
const TextBox = ({
  label,
  name,
  placeholder,
  value,
  handleChange,
  isRequired,
  message,
  readOnly,
  defaultValue,
}) => {
  return (
    <div className='flex flex-col gap-1 w-full font-QuickSand'>
      <label className='text-[14px] lg:text-lg font-medium'>
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <div className='relative'>
        <textarea
          className='w-[100%] border-2 border-gray px-5 py-2 text-[18px] font-medium text-[#000] placeholder:text-[#959292] placeholder:text-[16px] rounded outline-2 outline-secondary'
          name={name}
          cols='20'
          rows='6'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={isRequired}
          readOnly={readOnly}
          defaultValue={defaultValue}
        ></textarea>
      </div>
      {message && (
        <p className='text-[14px] font-medium text-purple mt-2 max-w-[300px] mx-auto'>
          {message}
        </p>
      )}
    </div>
  );
};
TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  message: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
};
export default TextBox;
