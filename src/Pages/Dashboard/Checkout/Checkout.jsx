import { loadStripe } from '@stripe/stripe-js';
import Heading from '../../../Components/Heading/Heading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Input from '../../../Components/Input/Input';

import { useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import { QueryClient } from '@tanstack/react-query';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);
const Checkout = () => {
  const secureAxios = useAxios();
  const queryClient = new QueryClient();
  const paymentInitiate = JSON.parse(localStorage.getItem('paymentInitiate'));
  const [billingInfo, setBillingInfo] = useState({
    billingName: '',
    billingEmail: '',
    billingPhone: '',
    billingAddress: '',
  });
  const [couponCode, setCouponCode] = useState(null);
  const [couponDiscount, setCouponDiscount] = useState(0.0);
  const [subTotalRent, setSubTotalRent] = useState(
    paymentInitiate.apartmentInfo.rent
  );
  const [couponErrMsg, setCouponErrMsg] = useState(null);
  const [couponSuccessMessage, setCouponSuccessMessage] = useState(null);
  const handleBillingInfoChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: fieldValue,
    }));
  };

  const getCoupon = async () => {
    const res = await secureAxios.get(`/coupon/${couponCode}`);
    return res.data;
  };

  const handleApplyCoupon = async () => {
    const data = await queryClient.fetchQuery({
      queryKey: ['getCouponData'],
      queryFn: getCoupon,
    });
    if (data.success && data.coupon) {
      // calculate the coupon discount
      const totalRent = paymentInitiate.apartmentInfo.rent;
      const discountPercent = data.coupon.discount;
      const discountRentAmount = (totalRent * discountPercent) / 100;
      setCouponDiscount(discountRentAmount.toFixed(2));
      const subTotal = totalRent - discountRentAmount;
      setSubTotalRent(subTotal.toFixed(2));
      setCouponSuccessMessage('Coupon Applied');
    } else {
      data.message === 'Coupon Expired'
        ? setCouponErrMsg('Coupon Expired')
        : setCouponErrMsg('Coupon Not Valid');
    }
  };
  return (
    <div className='w-full min-h-[88vh] container mx-auto pb-10'>
      <Heading
        title='Checkout'
        subTitle='Complete Your Payment'
      />
      <div className='flex justify-center items-center w-full gap-16 font-QuickSand bg-white-50 py-20 max-w-[60vw] mx-auto rounded-md shadow-lg'>
        <form className='max-w-sm space-y-6'>
          <p className='lg:text-4xl text-lg uppercase font-medium'>
            Billing Info
          </p>
          <Input
            type='text'
            labelText='Name'
            placeholder='Enter Your Full Name'
            defaultValue={paymentInitiate?.user.userName}
            name='billingName'
            required={true}
            onChange={handleBillingInfoChange}
          />
          <Input
            type='email'
            name='billingEmail'
            placeholder='Enter Email'
            required={true}
            labelText='Your Email'
            className='outline-none text-gray-500'
            defaultValue={paymentInitiate?.user.userEmail}
          />
          <Input
            type='tel'
            name='billingPhone'
            placeholder='+8801857771268'
            required={true}
            labelText='Your Phone'
            className='outline-none text-gray-500'
          />
          <Input
            type='address'
            name='billingAddress'
            placeholder='10/2 South Auchpara'
            required={true}
            labelText='Your Address'
            className='outline-none text-gray-500'
          />
        </form>
        <div className=''>
          {/* right side Total Cart */}
          <div className='min-w-[35%] space-y-6 bg-white-50'>
            <div className='w-full rounded border-2 border-blue-500 border-opacity-[0.49] backdrop-blur-[5px] px-6 py-4'>
              <p
                style={{ fontFamily: 'Quicksand' }}
                className='text-[22px] font-bold uppercase mb-3 text-center'
              >
                Total Payment Summery
              </p>
              <div className='space-y-6'>
                <div className='flex justify-between items-center'>
                  <p className='text-[18px] font-medium'>Payment Month Of :</p>
                  <p className='text-[18px] font-medium'>
                    {paymentInitiate.paymentOfMonth}
                  </p>
                </div>
                <hr className='w-full h-[2px] bg-gray-300' />
                <div className='flex justify-between items-center'>
                  <p className='text-[18px] font-medium'>Total Rent : </p>
                  <p className='text-[18px] font-medium'>
                    ${paymentInitiate.apartmentInfo.rent.toFixed(2)}
                  </p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-[18px] font-medium'>Coupon Discount : </p>
                  <p className='text-[18px] font-medium'>-${couponDiscount}</p>
                </div>
                <hr className='w-full h-[2px] bg-gray-300' />
                <div className='flex justify-between items-center'>
                  <p className='text-[18px] font-medium'>Sub Total : </p>
                  <p className='text-[18px] font-medium'>${subTotalRent}</p>
                </div>
                <hr className='w-full h-[2px] bg-gray-300' />
                <div className='relative h-fit'>
                  <Input
                    placeholder='Have Coupon?'
                    onChange={(e) => setCouponCode(e.target.value)}
                    errorMessage={couponErrMsg}
                    successMessage={couponSuccessMessage}
                  />
                  <button
                    className='absolute top-[0px] right-0 w-[80px]  bg-primary-700 rounded-r text-white-50 hover:bg-primary-400 hover:text-primary-700 duration-300 px-5 py-2 text-[18px] font-medium border-2 border-transparent-50 text-center'
                    onClick={handleApplyCoupon}
                  >
                    Apply
                  </button>
                </div>
                <hr className='w-full h-[2px] bg-gray-300' />
              </div>
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  billingInfo={billingInfo}
                  subTotalPrice={parseInt(subTotalRent)}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
