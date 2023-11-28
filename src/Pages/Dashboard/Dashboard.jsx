import { Outlet } from 'react-router-dom';
import SideBar from '../../Layouts/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className='bg-primary-100'>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
