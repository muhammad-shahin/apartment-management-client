import PropTypes from 'prop-types';
import { useRef } from 'react';
import useScroll from '../../Hooks/useScroll';

const Heading = ({ title, subTitle, titleColor, className }) => {
  const headingRef = useRef(null);
  useScroll(headingRef, 'fade-up');
  return (
    <div
      className='py-10 lg:pb-10 text-black-50 dark:text-white-50 leading-none space-y-2 fade-up'
      style={{ animationDuration: '0.7s' }}
      ref={headingRef}
    >
      <h1
        className={`lg:text-[3.5rem] md:text-[3rem] text-[2rem] uppercase text-center font-medium   dark:text-white-50 ${className}`}
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
  className: PropTypes.string,
};

export default Heading;
