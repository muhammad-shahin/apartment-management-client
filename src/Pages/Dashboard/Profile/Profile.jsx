import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DashboardTable from '../../../Shared/DashboardTable';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import Lottie from 'lottie-react';
import useBookedApartment from '../../../Hooks/useBookedApartment';
import Swal from 'sweetalert2';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import TableActionButtons from '../../../Shared/TableActionButtons';
import useRegisteredUser from '../../../Hooks/useRegisteredUser';
import { FcCancel } from 'react-icons/fc';
import AdminStatistics from './AdminStatistics';

const Profile = () => {
  PageTitle('Profile | Linden Apartment Management ');
  const registeredUser = useRegisteredUser();
  const { user } = useContext(AuthContext);
  let emptyTable = false;
  const recentReqTableHeadData = [
    '#',
    'Request Date',
    'Block No',
    'Apartment No',
    'Rent',
    'Status',
    'Action',
  ];
  if (registeredUser?.userRole !== 'user') {
    const toIndex = recentReqTableHeadData.length - 1;
    recentReqTableHeadData.splice(toIndex, 0, 'Accepted Date');
  }
  const {
    isLoading,
    isPending,
    isError,
    error,
    refetch,
    requestedApartmentsData,
  } = useBookedApartment();

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

  // handle no data found
  if (!requestedApartmentsData || requestedApartmentsData?.length === 0) {
    emptyTable = true;
  }

  // handle cancel
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
          className='lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-cover rounded-full cursor-pointer absolute top-[-80px] left-[50%] translate-x-[-50%]'
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

      {/* admin statistics */}
      <div className='w-fit mx-auto relative text-center'>
        <AdminStatistics />
      </div>

      {/* recent apartment renting request */}
      <div className='container mx-auto'>
        <p className='text-xl lg:text-4xl text-center uppercase text-primary-700'>
          Your Recent Agreement
        </p>
        <DashboardTable
          emptyTable={emptyTable}
          tableHead={recentReqTableHeadData}
        >
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
              {registeredUser?.userRole !== 'user' && (
                <td className='border border-primary-700 p-2'>
                  {requested.acceptedDate}
                </td>
              )}
              <td className='border border-primary-700 p-2'>
                <TableActionButtons>
                  <button
                    className='bg-blue-400 rounded-full p-2 hover:bg-primary-600 hover:text-white-50 duration-300'
                    title='Cancel Request'
                  >
                    <FcCancel className='text-[22px] text-white' />
                  </button>
                </TableActionButtons>
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>
    </div>
  );
};

export default Profile;
