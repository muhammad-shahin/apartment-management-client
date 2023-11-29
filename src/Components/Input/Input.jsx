import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
const Input = ({
  name,
  type,
  placeholder,
  onChange,
  errorMessage,
  successMessage,
  labelText,
  onBlur,
  required = true,
  defaultValue,
  className,
  readOnly,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='w-[100%] relative font-QuickSand'>
      <label className='text-[14px] lg:text-lg font-medium'>
        {labelText}{' '}
        {labelText && <span className='text-red-600 text-[18px]'>*</span>}{' '}
      </label>
      <input
        className={`w-[100%] border-2 border-gray-200 px-5 py-2 text-[18px] font-medium text-[#000] placeholder:text-[#959292]  rounded outline-2 outline-blue-300 ${className}`}
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />
      {type === 'password' && (
        <AiFillEye
          title='Click To Show or Hide Password'
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className={`absolute top-[40px] md:top-[35px] md:right-[20px] right-[10px] text-[24px] md:text-[32px] ${
            showPassword ? 'text-sky-500' : 'text-gray-700'
          } cursor-pointer`}
        />
      )}
      {errorMessage && (
        <p className='text-[14px] text-red-500'>{errorMessage}</p>
      )}
      {successMessage && (
        <p className='text-[14px] text-green-500'>{successMessage}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  defaultValue: PropTypes.any,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;
