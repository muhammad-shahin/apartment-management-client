import PropTypes from 'prop-types';

const SecondaryButton = ({ handleClick, text, icon }) => {
  return (
    <>
      <button
        className={`flex justify-center items-center gap-3 font-QuickSand font-medium text-sm lg:text-xl border-2 lg:px-8 lg:py-3 px-3 py-1 hover:text-white-50 uppercase hover:bg-primary-500 text-primary-500 border-primary-500 duration-300 group`}
        onClick={handleClick}
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
};

export default SecondaryButton;
