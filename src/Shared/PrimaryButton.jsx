import PropTypes from 'prop-types';

const PrimaryButton = ({ handleClick, text, icon }) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-3 font-QuickSand font-medium text-lg lg:text-xl border-2 border-white-50 px-8 py-3 text-white-50 uppercase hover:bg-white-50 hover:text-primary-500 hover:border-primary-500 duration-300`}
        onClick={handleClick}
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
};

export default PrimaryButton;
