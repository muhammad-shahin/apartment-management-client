import Lottie from 'lottie-react';
import couponAnim from '../../assets/Animation/coupon-animation.json';
const Coupon = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={couponAnim}
      />
    </div>
  );
};

export default Coupon;
