import { Outlet } from 'react-router-dom';
import SideBar from '../../Layouts/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
