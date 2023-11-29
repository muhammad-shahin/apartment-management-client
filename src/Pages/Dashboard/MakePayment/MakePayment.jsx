import Swal from 'sweetalert2';
import Heading from '../../../Components/Heading/Heading';
import Input from '../../../Components/Input/Input';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import SelectOptions from '../../../Components/SelectOptions/SelectOptions';
import useBookedApartment from '../../../Hooks/useBookedApartment';
import useRegisteredUser from '../../../Hooks/useRegisteredUser';
import SecondaryButton from '../../../Shared/SecondaryButton';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import notAvailableAnim from '../../../assets/Animation/notAvailable.json';
import Lottie from 'lottie-react';
import {
  getAllApartmentNo,
  getApartmentByNo,
} from '../../../Services/getApartmentByNo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MakePayment = () => {
  PageTitle('Payment || Linden Apartment Management');
  const navigate = useNavigate();
  const [selectedApartment, setSelectedApartment] = useState({});
  const registeredUser = useRegisteredUser();
  const {
    isLoading,
    isPending,
    isError,
    error,
    refetch,
    requestedApartmentsData,
  } = useBookedApartment();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // handle error
  if (isError) {
    console.log('Failed to Load your booked apartment data : ', error);
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
  if (!requestedApartmentsData || requestedApartmentsData?.length === 0) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4 px-[5%]'>
        <h1 className='text-5xl text-center'>
          No Booked Apartment Data Available
        </h1>
        <Lottie
          loop
          animationData={notAvailableAnim}
        />
      </div>
    );
  }

  //   handle apartment selection
  const handleApartmentSelection = (e) => {
    const selected = e.target.value;
    setSelectedApartment(getApartmentByNo(requestedApartmentsData, selected));
  };
  console.log(selectedApartment);

  //   handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const paymentOfMonth = form.paymentOfMonth.value;
    const paymentInitiate = {
      apartmentInfo: {
        rent: selectedApartment.apartment?.rent,
        floorNo: selectedApartment.apartment?.floorNo,
        apartmentNo: selectedApartment.apartment?.apartmentNo,
        blockName: selectedApartment.apartment?.blockName,
      },
      user: {
        ...registeredUser,
      },
      otherPaymentInfo: {},
      paymentOfMonth,
    };
    localStorage.setItem('paymentInitiate', JSON.stringify(paymentInitiate));
    console.log(paymentInitiate);
    form.reset();
    setSelectedApartment({});
    navigate('/dashboard/checkout');
  };

  return (
    <div className='container mx-auto min-h-screen'>
      <Heading
        title='Pay Rent'
        className='text-primary-700'
      />
      <div className='bg-white-50 lg:max-w-[50vw] mx-auto px-5 py-20 rounded '>
        <form
          className='max-w-3xl mx-auto space-y-8'
          onSubmit={handleFormSubmit}
        >
          <SelectOptions
            name='selectApartment'
            label='Select Apartment (if you have multiple apartments)'
            defaultOption={'Select Apartment By Apartment No.'}
            isRequired={true}
            optionsData={getAllApartmentNo(requestedApartmentsData)}
            handleChange={handleApartmentSelection}
          />
          <div className='flex justify-center items-center lg:flex-row flex-col gap-8'>
            <SelectOptions
              name='paymentOfMonth'
              label='Select Month'
              defaultOption={'Select Payment Month'}
              isRequired={true}
              optionsData={months}
            />
            <Input
              type='email'
              name='userEmail'
              placeholder='Enter Email'
              required={true}
              labelText='Your Email'
              className='outline-none text-gray-500'
              readOnly={true}
              defaultValue={registeredUser?.userEmail}
            />
          </div>
          <div className='flex justify-center items-center lg:flex-row flex-col gap-8'>
            <Input
              type='text'
              name='blockName'
              required={true}
              labelText='Block Name'
              className='outline-none text-gray-500'
              readOnly={true}
              defaultValue={
                selectedApartment
                  ? selectedApartment.apartment?.blockName
                  : 'Select Apartment'
              }
            />
            <Input
              type='text'
              name='apartmentNo'
              required={true}
              labelText='Apartment No'
              className='outline-none text-gray-500'
              readOnly={true}
              defaultValue={
                selectedApartment
                  ? selectedApartment.apartment?.apartmentNo
                  : 'Select Apartment'
              }
            />
          </div>
          <div className='flex justify-center items-center lg:flex-row flex-col gap-8'>
            <Input
              type='text'
              name='floorNo'
              required={true}
              labelText='Floor No'
              className='outline-none text-gray-500'
              readOnly={true}
              defaultValue={
                selectedApartment
                  ? selectedApartment.apartment?.floorNo
                  : 'Select Apartment'
              }
            />
            <Input
              type='text'
              name='rent'
              required={true}
              labelText='Apartment Rent'
              className='outline-none text-gray-500'
              readOnly={true}
              defaultValue={
                selectedApartment
                  ? selectedApartment.apartment?.rent
                  : 'Select Apartment'
              }
            />
          </div>
          <SecondaryButton
            text='Pay Rent'
            className='w-full'
          />
        </form>
      </div>
    </div>
  );
};

export default MakePayment;
