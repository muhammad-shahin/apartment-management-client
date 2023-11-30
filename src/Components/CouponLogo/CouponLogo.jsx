/* eslint-disable react/prop-types */
import Lottie from 'lottie-react';
import couponAnim from '../../assets/Animation/coupon-animation.json';
const CouponLogo = ({ couponLogoTitle }) => {
  return (
    <div className='lg:w-[150px] md:w-[100px] lg:h-[150px] md:h-[100px] w-[80px] h-[80px] rounded-full bg-primary-300 overflow-hidden bg-opacity-75 backdrop-blur-lg cursor-pointer'>
      <Lottie
        loop
        animationData={couponAnim}
      />
      <p className='text-center bg-red-500 text-white-50 font-bold lg:text-base text-[10px] relative lg:translate-y-[-40px] translate-y-[-20px] uppercase'>
        {couponLogoTitle ? couponLogoTitle : 'FREE COUPONS'}
      </p>
    </div>
  );
};

export default CouponLogo;
