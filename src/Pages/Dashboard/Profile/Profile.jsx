import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='bg-primary-50 min-h-[88vh] '>
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
      <div className='w-fit mx-auto relative'>
        <img
          src={user?.photoURL}
          className='w-[150px] h-[150px] object-cover rounded-full cursor-pointer absolute top-[-80px] translate-x-[40px]'
          loading='lazy'
        />
        <p className='text-xl lg:text-3xl text-center pt-[80px]'>
          {user?.displayName}
        </p>
      </div>
    </div>
  );
};

export default Profile;
