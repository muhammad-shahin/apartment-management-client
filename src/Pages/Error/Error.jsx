import { NavLink } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import Lottie from 'lottie-react';
import notFoundAnim from '../../assets/Animation/notFound.json';
const Error = () => {
  PageTitle('404 Page Not Found - Linden Apartment Management');
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center space-y-4'>
      <div>
        <Lottie
          className='h-[60vh]'
          loop
          animationData={notFoundAnim}
        />
      </div>
      <p className='text-[#ff7373] font-bold text-[32px] max-w-2xl text-center'>
        The Page You are looking for is not found. You can navigate to pages
        below
      </p>
      <nav className='flex justify-center items-center font-bold text-[18px] lg:text-[36px]'>
        <NavLink
          className='mr-5 hover:text-primary-500'
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='mr-5 hover:text-primary-500'
          to='/login'
        >
          Login
        </NavLink>
        <NavLink
          className='mr-5 hover:text-primary-500'
          to='/sign-up'
        >
          Sign Up
        </NavLink>
      </nav>
    </div>
  );
};

export default Error;
