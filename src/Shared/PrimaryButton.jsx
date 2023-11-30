import PropTypes from 'prop-types';

const PrimaryButton = ({
  handleClick,
  text,
  icon,
  className,
  type = 'button',
}) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-3 font-QuickSand font-medium text-xs lg:text-xl border-2 border-white-50 px-8 py-3 text-white-50 uppercase hover:bg-white-50 hover:text-primary-500 hover:border-primary-500 duration-300 ${className}`}
        onClick={handleClick}
        type={type}
      >
        {text} {icon}
      </button>
    </>
  );
};

PrimaryButton.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default PrimaryButton;
