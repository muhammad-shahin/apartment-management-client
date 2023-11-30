import { Outlet } from 'react-router-dom';
import SideBar from '../../Layouts/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='bg-primary-100 min-h-[88.6vh]'>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
