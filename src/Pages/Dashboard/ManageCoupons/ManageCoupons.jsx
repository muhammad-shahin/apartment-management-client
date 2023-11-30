import Swal from 'sweetalert2';
import Heading from '../../../Components/Heading/Heading';
import DashboardTable from '../../../Shared/DashboardTable';
import AllCoupons from '../../../api/AllCoupons';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import useAxios from '../../../Hooks/useAxios';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import TableActionButtons from '../../../Shared/TableActionButtons';
import SecondaryButton from '../../../Shared/SecondaryButton';
import CustomModal from '../../../Components/CustomModal/CustomModal';
import { useState } from 'react';
import CouponLogo from '../../../Components/CouponLogo/CouponLogo';
import Input from '../../../Components/Input/Input';

const ManageCoupons = () => {
  PageTitle('Profile | Linden Apartment Management ');
  const secureAxios = useAxios();
  const [modalStatus, setModalStatus] = useState(false);
  let emptyTable = false;
  const pendingRequestsTableHeadData = [
    '#',
    'Coupon Code',
    'Expiry Date',
    'Coupon Details',
    'Discount',
    'Created By',
    'Action',
  ];
  const { isLoading, isPending, isError, error, refetch, allCouponsData } =
    AllCoupons();

  // handle error
  if (isError) {
    console.log('Failed to Load your coupon apartment data : ', error);
    Swal.fire({
      title: 'Failed To Fetch Data! Please Try Again :)',
      confirmButtonText: 'Try Again',
      icon: 'error',
    }).then((result) => {
      if (result.isConfirmed) {
        refetch();
      }
    });
  }

  // handle loading
  if (isLoading || isPending) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='lg:text-5xl text-2xl text-center gradient-text py-3'>
          Loading Please Wait
        </h1>
        <Lottie
          loop
          animationData={loadingAnimation}
        />
      </div>
    );
  }

  // handle no data found
  if (!allCouponsData || allCouponsData?.length === 0) {
    emptyTable = true;
  }

  //   handle add coupon
  const handleAddNewCoupon = (e) => {
    e.preventDefault();
    const form = e.target;
    const couponCode = form.couponCode.value;
    const couponDescription = form.couponDescription.value;
    const couponExpiryDate = form.couponExpiryDate.value;
    const discount = form.discount.value;
    const newCoupon = {
      couponCode,
      couponDescription,
      couponExpiryDate,
      discount,
    };
    secureAxios.post('/coupon', newCoupon).then((res) => {
      if (res.data.success) {
        refetch();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'New Coupon Added Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        setModalStatus(false);
      }
    });
  };

  return (
    <div className='bg-primary-50 lg:min-h-[88vh] min-h-[100vh] leading-none px-[5%] lg:px-0 w-full mx-auto'>
      {/* pending renting request */}
      <div className='container mx-auto'>
        <Heading
          title='All Coupons'
          className='text-primary-600'
        />
        <div className='w-fit mx-auto'>
          <SecondaryButton
            text='Add New Coupon'
            handleClick={() => setModalStatus(true)}
          />
        </div>
        <DashboardTable
          emptyTable={emptyTable}
          tableHead={pendingRequestsTableHeadData}
          className='min-w-[70vw]'
        >
          {allCouponsData?.map((coupon, index) => (
            <tr
              key={coupon?.couponCode}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {coupon?.couponCode}
              </td>
              <td className='border border-primary-700 p-2'>
                {coupon?.couponExpiryDate}
              </td>
              <td className='border border-primary-700 p-2'>
                {coupon?.couponDescription}
              </td>
              <td className='border border-primary-700 p-2'>
                {coupon?.discount}%
              </td>
              <td className='border border-primary-700 p-2'>
                {coupon?.createdBy ? coupon?.createdBy : 'N/A'}
              </td>
              <td className='border border-primary-700 p-2'>
                <TableActionButtons
                  remove={'Remove Coupon'}
                ></TableActionButtons>
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>

      {/* add new coupon modal */}
      <CustomModal
        CustomModalStatus={modalStatus}
        setCustomModalStatus={setModalStatus}
        title='Add New Coupon Code'
        customIcon={<CouponLogo couponLogoTitle='Add Coupon' />}
      >
        <form
          className='max-w-[90%] mx-auto pb-10 space-y-6'
          onSubmit={handleAddNewCoupon}
        >
          <Input
            className='bg-gray-50 border-primary-400 outline-primary-700'
            labelText='Coupon Code'
            placeholder='Write New Coupon Code'
            required
            type='text'
            name='couponCode'
          />
          <Input
            className='bg-gray-50 border-primary-400 outline-primary-700'
            labelText='Coupon Description'
            placeholder='Write New Coupon Description'
            required
            type='text'
            name='couponDescription'
          />
          <Input
            className='bg-gray-50 border-primary-400 outline-primary-700'
            labelText='Coupon Expiry Date'
            required
            type='date'
            name='couponExpiryDate'
          />
          <Input
            className='bg-gray-50 border-primary-400 outline-primary-700'
            labelText='Coupon Discount (%)'
            placeholder='Add New Coupon Discount'
            required
            type='number'
            name='discount'
          />
          <SecondaryButton
            text='Submit Coupon'
            className='w-full rounded lg:py-2'
            type='submit'
          />
        </form>
      </CustomModal>
    </div>
  );
};

export default ManageCoupons;
