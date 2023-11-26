import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
  return (
    <main className='bg-white dark:bg-[#07031d] duration-500 font-bold'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
