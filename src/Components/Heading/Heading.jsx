import PropTypes from 'prop-types';

const Heading = ({ title, subTitle, titleColor }) => {
  return (
    <div
      className='py-10 lg:pb-20 text-black-50 dark:text-white-50 leading-none space-y-2 fade-down'>
      <h1
        className={`lg:text-[3.5rem] md:text-[3rem] text-[2rem] uppercase text-center font-medium   dark:text-white-50 ${
          titleColor
            ? 'text-blue-400 before:bg-blue-400 after:bg-blue-400'
            : ' text-black-50'
        }`}
      >
        {title}
      </h1>
      <p className='md:text-[22px] text-[14px] uppercase text-center text-primary-500 font-QuickSand font-semibold'>
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
