import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import sidebarData from '../../assets/data/sidebarData';

const SideBar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(true);
  const role = 'admin';
  return (
    <div className={`relative`}>
      <div
        className={`relative bg-primary-500 h-screen bg-opacity-95 backdrop-blur-lg duration-300 ${
          collapseSidebar ? 'lg:w-[320px] w-0' : 'lg:w-[50px] w-[300px]'
        }`}
        onMouseEnter={() => setCollapseSidebar(true)}
        onMouseLeave={() => setCollapseSidebar(false)}
      >
        {/* dashboard routes */}
        <div className='py-4 space-y-4'>
          <div
            className={`text-white-50 lg:text-[1.5rem] text-sm ${
              collapseSidebar ? 'lg:block' : 'lg:hidden block'
            }`}
          >
            <hr />
            <p className='uppercase py-3 text-center'>Manage Dashboard</p>
            <hr />
          </div>

          {sidebarData.map(
            (data, index) =>
              data.access.includes(role)  && (
                <div
                  key={'sidebarData' + index}
                  className={`duration-300 ${
                    collapseSidebar ? 'px-5' : 'pl-2'
                  } py-2 hover:bg-primary-50 hover:text-primary-500 rounded flex justify-start items-center gap-3 text-white-50 lg:text-[1.5rem] text-sm cursor-pointer w-[90%] mx-auto`}
                >
                  {data.icon}
                  <p
                    className={`${
                      collapseSidebar ? 'lg:block' : 'lg:hidden block'
                    }`}
                  >
                    {data.name === 'My Profile' && role === 'admin'
                      ? 'Admin Profile'
                      : data.name}
                  </p>
                </div>
              )
          )}
        </div>

        {/* collapse button */}
        <div
          className='bg-primary-500 rounded-r-full w-fit mx-auto absolute top-[5px] right-[-45px] cursor-pointer'
          onClick={() => setCollapseSidebar(!collapseSidebar)}
        >
          <IoIosArrowForward
            className={`text-white-50 text-[45px] text-right duration-300 ${
              collapseSidebar
                ? 'rotate-0 lg:rotate-[180deg]'
                : 'rotate-[180deg] lg:rotate-0'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
