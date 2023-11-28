import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DashboardTable from '../../../Shared/DashboardTable';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import useAxios from '../../../Hooks/useAxios';
import Lottie from 'lottie-react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import TableActionButtons from '../../../Shared/TableActionButtons';

const Profile = () => {
  PageTitle('Profile | Linden Apartment Management ');
  const secureAxios = useAxios();
  const { user } = useContext(AuthContext);
  const userObjectId = localStorage.getItem('registeredUser');
  const recentReqTableHeadData = [
    '#',
    'Request Date',
    'Block No',
    'Apartment No',
    'Rent',
    'Status',
    'Action',
  ];

  // get requested apartment data
  const {
    data: requestedApartmentsData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getRequestedApartments'],
    queryFn: async () => {
      const res = await secureAxios.get(`/booked-apartments/${userObjectId}`);
      return res.data;
    },
  });

  // handle error
  if (isError) {
    console.log('Failed to Load your requested apartment data : ', error);
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
  return (
    <div className='bg-primary-50 lg:min-h-[88vh] min-h-[100vh] leading-none px-[5%] lg:px-0 w-full mx-auto'>
      {/* cover image */}
      <div className='h-[180px] w-full overflow-hidden'>
        <div className='relative w-full h-full'>
          <img
            src='https://images.pexels.com/photos/129494/pexels-photo-129494.jpeg'
            className='object-top w-full h-full object-cover'
            loading='lazy'
          />
          <div className='overlay opacity-50'></div>
        </div>
      </div>

      {/* profile details */}
      <div className='w-fit mx-auto relative text-center'>
        <img
          src={
            user?.photoURL
              ? user.photoURL
              : 'https://wallpapers-clan.com/wp-content/uploads/2022/12/anonymous-pfp-1.jpg'
          }
          className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-cover rounded-full cursor-pointer absolute top-[-80px] lg:translate-x-[80px] translate-x-[55px]'
          loading='lazy'
        />
        <p className='font-bold text-sm lg:text-2xl mt-2 lg:pt-[80px] pt-[30px]'>
          Profile Status
        </p>
        <p
          className={`${
            user?.emailVerified
              ? 'bg-green-300 text-green-600'
              : 'bg-red-300 text-red-600'
          }  px-4 py-1 rounded-full  font-bold w-fit mx-auto mb-4`}
        >
          {user?.emailVerified ? 'Verified' : 'Not Verified'}
        </p>
        <hr className='w-full h-[2px] bg-gray-300 mt-3 my-3' />
        <p className='text-xl lg:text-3xl text-center uppercase'>
          {user?.displayName}
        </p>
        <p className='text-[18px] lg:text-2xl font-semibold mt-2'>
          {user?.email ? user?.email : 'anonymous@gmail.com'}
        </p>
      </div>
      <hr className='my-10' />

      {/* recent apartment renting request */}
      <div className='container mx-auto'>
        <p className='text-xl lg:text-4xl text-center uppercase text-primary-700'>
          Recent renting request
        </p>
        <DashboardTable tableHead={recentReqTableHeadData}>
          {requestedApartmentsData.map((requested, index) => (
            <tr
              key={requested?.apartment?.blockName + index}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {requested.bookingDate}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested.apartment.blockName}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested.apartment.apartmentNo}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested.apartment.rent}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested.bookingStatus}
              </td>
              <td className='border border-primary-700 p-2'>
                <TableActionButtons remove='Remove' />
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>
    </div>
  );
};

export default Profile;
