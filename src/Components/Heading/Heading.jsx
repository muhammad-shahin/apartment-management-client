import PropTypes from 'prop-types';

const Heading = ({ title, subTitle, titleColor }) => {
  return (
    <div className='my-10 text-black-50 dark:text-white-50'>
      <h1
        className={`title-bar md:text-[68px] text-[20px] uppercase text-center font-medium   dark:text-white-50 ${
          titleColor
            ? 'text-blue-400 before:bg-blue-400 after:bg-blue-400'
            : ' text-black-50'
        }`}
      >
        {title}
      </h1>
      <p className='md:text-[22px] text-[14px] uppercase text-center'>
        {subTitle}
      </p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleColor: PropTypes.bool,
};

export default Heading;
