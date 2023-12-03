import './UserProfile.css';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div
      className={`rounded bg-primary-400 backdrop-blur-[25px] bg-opacity-[0.69] p-5 text-center relative z-50 lg:min-w-[320px]`}
    >
      <img
        src={
          user?.photoURL
            ? user.photoURL
            : 'https://wallpapers-clan.com/wp-content/uploads/2022/12/anonymous-pfp-1.jpg'
        }
        className='rounded-full w-[64px] object-cover mx-auto'
        loading='lazy'
      />
      <p className='font-bold text-[14px] mt-2'>Profile Status</p>
      <p
        className={`${
          user?.emailVerified
            ? 'bg-green-300 text-green-600'
            : 'bg-red-300 text-red-600'
        }  px-4 py-1 rounded-full  font-bold w-fit mx-auto mb-4`}
      >
        {user?.emailVerified ? 'Verified' : 'Not Verified'}
      </p>
      <h4 className=' font-bold text-[18px]'>{user?.displayName}</h4>
      <p className='text-[18px] font-semibold  mt-2'>
        {user?.email ? user?.email : 'anonymous@gmail.com'}
      </p>
      <hr className='w-full h-[2px] bg-gray-300 mt-3' />

      {/* Pages */}
      <div className='flex flex-col gap-2 mt-3'>
        <NavLink
          className=' font-bold text-[18px] flex justify-center items-center gap-3'
          to='/dashboard'
        >
          <RxDashboard />
          Dashboard
        </NavLink>
      </div>
      <hr className='w-full h-[2px] bg-gray-300 mt-3' />
      <button
        className='px-5 py-2 bg-primary-500 rounded-full font-bold text-white-50 hover:scale-[0.9] hover:bg-red-500 duration-300 my-4 uppercase'
        onClick={() => {
          logoutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
