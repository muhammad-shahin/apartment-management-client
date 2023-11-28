import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

const SelectOptions = ({
  label,
  name,
  handleChange,
  optionsData,
  isRequired,
  defaultOption,
  message,
  defaultValue,
  className,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full flex flex-col font-QuickSand'>
      <label className='text-[14px] lg:text-lg font-medium'>
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <div className='relative'>
        <select
          id='select'
          className={`w-[100%] border-2 border-gray px-5 py-2 text-[18px] font-medium focus:text-black text-gray placeholder:text-[16px] rounded outline-2 outline-secondary appearance-none  cursor-pointer ${className}`}
          name={name}
          onChange={handleChange}
          required={isRequired}
          onClick={() => {
            setOpen(!open);
          }}
          onBlur={() => {
            setOpen(false);
          }}
        >
          <option value={defaultValue}>{defaultOption}</option>
          {optionsData?.map((district, index) => (
            <option
              key={index}
              value={district}
              className='text-base lg:text-lg font-medium'
            >
              {district}
            </option>
          ))}
          {message && (
            <p className='text-[14px] lg:text-lg font-medium text-purple mt-1'>
              {message}
            </p>
          )}
        </select>
        <div
          htmlFor='select'
          className='absolute top-[50%] right-[20px] translate-y-[-50%]'
        >
          {open ? (
            <BiSolidUpArrow className='text-text-gray text-[14px]' />
          ) : (
            <BiSolidDownArrow className='text-text-gray text-[14px]' />
          )}
        </div>
      </div>
    </div>
  );
};

SelectOptions.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  message: PropTypes.string,
  defaultOption: PropTypes.string,
  handleChange: PropTypes.func,
  optionsData: PropTypes.array,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.bool,
  className: PropTypes.string,
};

export default SelectOptions;
