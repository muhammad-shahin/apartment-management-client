import PropTypes from 'prop-types';

const SecondaryButton = ({
  handleClick,
  text,
  icon,
  className,
  type,
  disabled,
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-3 font-QuickSand font-medium text-sm lg:text-xl border-2 lg:px-8 lg:py-3 px-3 py-1 hover:text-white-50 uppercase hover:bg-primary-500 text-primary-500 border-primary-500 duration-300 group dark:border-white-50 dark:text-white-50 dark:hover:bg-white-50 dark:hover:text-primary-500 dark:hover:border-primary-600 ${className} disabled:bg-gray-500 disabled:cursor-wait`}
        onClick={handleClick}
        type={type}
        disabled={disabled}
      >
        {text} {icon}
      </button>
    </>
  );
};

SecondaryButton.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SecondaryButton;
