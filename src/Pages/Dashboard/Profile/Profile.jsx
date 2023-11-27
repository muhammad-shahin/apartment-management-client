import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import DashboardTable from '../../../Shared/DashboardTable';
import PageTitle from '../../../Components/PageTitle/PageTitle';

const Profile = () => {
  PageTitle('Profile | Linden Apartment Management ');
  const recentReqTableHeadData = [
    '#',
    'Request Date',
    'Block No',
    'Apartment No',
    'Rent',
    'Status',
    'Action',
  ];
  const { user } = useContext(AuthContext);
  return (
    <div className='bg-primary-50 lg:min-h-[88vh] min-h-[100vh] leading-none'>
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
        <DashboardTable tableHead={recentReqTableHeadData} />
      </div>
    </div>
  );
};

export default Profile;
