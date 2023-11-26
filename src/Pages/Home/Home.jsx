import { useState } from 'react';
import AboutBuilding from '../../Components/AboutBuilding/AboutBuilding';
import ApartmentFeatures from '../../Components/ApartmentFeatures/ApartmentFeatures';
import ApartmentLocations from '../../Components/ApartmentLocations/ApartmentLocations';
import Coupon from '../../Components/Coupon/Coupon';
import FloorPlan from '../../Components/FloorPlan/FloorPlan';
import NewBanner from '../../Components/NewBanner/NewBanner';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Footer from '../../Layouts/Footer/Footer';
import CustomModal from '../../Components/CustomModal/CustomModal';
import { MdOutlineContentCopy } from 'react-icons/md';
import Swal from 'sweetalert2';

const Home = () => {
  PageTitle('Home - Apartment Management Web Application');
  const [openCoupon, setOpenCoupon] = useState(false);
  const [couponCodes, setCouponCodes] = useState({
    couponName: 'SHA23',
    couponCode: 'SHA23',
  });

  const handleCopyCoupon = (code) => {
    navigator.clipboard.writeText(code);
    setOpenCoupon(false);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Coupon Code Copied!',
      text: 'Start Renting Apartment Now Before The Coupon Get Expired!!!',
      showConfirmButton: true,
      confirmButtonText: 'Rent Now',
      confirmButtonColor: '#aa8448',
    });
  };

  return (
    <section>
      {/* collect coupon section */}
      <div
        className='fixed lg:bottom-[30px] lg:right-[30px] bottom-[10px] right-[10px] z-[200]'
        onMouseEnter={() => setOpenCoupon(!openCoupon)}
        onClick={() => setOpenCoupon(!openCoupon)}
      >
        <Coupon />
      </div>
      <div className='min-h-[100vh]'>
        <NewBanner />
      </div>

      {/* about building section */}
      <div className='py-10 container mx-auto px-[5%] lg:px-0'>
        <AboutBuilding />
      </div>

      {/* floor plan section */}
      <div className='py-10 bg-primary-100 bg-opacity-75 backdrop-blur-lg'>
        <FloorPlan />
      </div>

      {/* Apartment Features section */}
      <div className='py-10 container mx-auto px-[5%] lg:px-0'>
        <ApartmentFeatures />
      </div>

      {/* our location section */}
      <div className='py-10 bg-primary-100 bg-opacity-75 backdrop-blur-lg'>
        <ApartmentLocations />
      </div>
      <Footer />

      {/* modal for coupon codes */}
      <CustomModal
        setCustomModalStatus={setOpenCoupon}
        CustomModalStatus={openCoupon}
        title='Free Coupons!'
        message='Claim Your Free Coupons Now!'
        customIcon={<Coupon />}
      >
        <div className='text-center pb-5 text-gray-400'>
          <p className='uppercase font-QuickSand '>
            Expiry Date : 14 Nov, 2023
          </p>
          <div className='relative spay w-fit mx-auto py-2'>
            <input
              type='email'
              className='lg:px-5 px-3 lg:py-1 py-2 border-2 border-gray-400 bg-transparent-50 lg:text-lg font-QuickSand outline-none'
              readOnly={true}
              value={couponCodes.couponCode}
            />
            <MdOutlineContentCopy
              className='absolute top-[50%] translate-y-[-50%] right-[10px] text-[22px] cursor-pointer hover:text-gray-600 duration-300'
              onClick={() => handleCopyCoupon(couponCodes.couponCode)}
            />
          </div>
        </div>
      </CustomModal>
    </section>
  );
};

export default Home;
