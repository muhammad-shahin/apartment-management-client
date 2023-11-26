import PropTypes from 'prop-types';

const FeatureCard = ({ title, subTitle, icon }) => {
  return (
    <div className='space-y-4'>
      <img
        src={icon}
        alt={title}
        loading='lazy'
        className='w-[68px] mx-auto lg:mx-0'
      />
      <p className='text-lg md:text-2xl lg:text-4xl font-bold text-center md:text-left'>
        {title}
      </p>
      <p className='max-w-[320px] desc text-center md:text-left'>{subTitle}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.any,
};

export default FeatureCard;
