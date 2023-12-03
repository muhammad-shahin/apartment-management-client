/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import UserProfile from '../../Components/UserProfile/UserProfile';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import DarkTheme from '../../Components/DarkTheme/DarkTheme';

const Navbar = () => {
  const { user, showProfile, setShowProfile, setIsSticky, isSticky } =
    useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const [headerHover, setHeaderHover] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrollPast = scrollY >= 0.5 * window.innerHeight;
      setIsSticky(isScrollPast);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`hover:bg-white-50 dark:hover:bg-transparent-50 duration-300 z-[150] ${
        window.location.pathname === '/' ? '' : 'bg-primary-500 bg-opacity-85'
      } ${
        isSticky ? 'fixed bg-primary-500 w-full bg-opacity-85' : 'relative'
      } `}
      onMouseEnter={() => setHeaderHover(true)}
      onMouseLeave={() => setHeaderHover(false)}
    >
      <nav className='py-3 container mx-auto flex justify-between items-center w-[90%] xl:w-auto relative text-black-50'>
        {/* text logo */}
        <div
          className={`text-center cursor-pointer ${
            headerHover ? 'text-black-50' : 'text-white-50'
          }`}
          onClick={() => {
            navigate('/');
          }}
        >
          <p className='xl:text-[58px] sm:text-[38px] xsm:text-[22px] leading-none uppercase'>
            Linden
          </p>
          <p className='xl:text-[18px] text-[12px] leading-none uppercase md:block hidden font-QuickSand'>
            apartment management
          </p>
        </div>
        {/* nav items */}
        <ul
          className={` lg:static fixed top-[72px] ${
            isOpen
              ? 'right-0'
              : 'right-[-100%] scale-0 lg:scale-[1] origin-right'
          } lg:h-auto h-screen lg:w-auto w-[100%] flex lg:flex-row flex-col  lg:opacity-[0.9] backdrop-blur-[25px] lg:px-5 py-2 justify-start lg:justify-center items-center lg:gap-10 gap-8 duration-300 z-[100] lg:rounded-full lg:pt-2 pt-10 font-QuickSand  font-bold text-[16px]  lg:bg-opacity-40 bg-primary-100 bg-opacity-30 dark:text-white-50 ${
            headerHover
              ? 'text-black-50 lg:bg-transparent-50'
              : 'text-white-50 lg:bg-primary-100'
          }`}
        >
          <li
            className=' hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className=' hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/apartments'>Apartments</NavLink>
          </li>
          <li
            className=' hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='sign-up'>The Building</NavLink>
          </li>
          <li
            className=' hover:scale-[1.1] duration-500'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/login'>Gallery</NavLink>
          </li>

          {user ? (
            <li
              className=' hover:scale-[1.1] duration-500'
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to='/dashboard'>Dashboard</NavLink>
            </li>
          ) : (
            <li
              className=' hover:scale-[1.1] duration-500'
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>
        {/* cart icons */}
        <div className='flex justify-center items-center gap-5'>
          <DarkTheme />
          {/* <div className='bg-gray-200 opacity-[0.7] backdrop-blur-lg rounded-full p-2 cursor-pointer hover:opacity-[1] duration-500 hover:bg-blue-500 hover:bg-opacity-[0.39] hover:text-white-50 relative  dark:opacity-[1] dark:text-blue-500'>
            <AiOutlineShoppingCart
              onClick={() => {
                navigate('/myCart');
              }}
              className='text-[22px]'
            />
            {user && (
              <p className='bg-red-600 rounded-full text-[8px] p-1 flex justify-center items-center absolute top-0 right-0 w-[15px] h-[15px] text-white-50'>
                {cartData ? cartData.length : 0}
              </p>
            )}
          </div> */}
        </div>
        {/* Profile Icon */}
        {user && (
          <div
            id='profile-icon'
            className='flex justify-center items-center gap-6 group rounded-full lg:border border-primary-300 lg:pl-5 lg:pr-1 lg:py-1'
            onClick={() => {
              setShowProfile(!showProfile);
            }}
          >
            <div className='flex justify-center items-center lg:gap-3'>
              <p
                className={`font-bold text-lg uppercase hidden lg:block ${
                  headerHover ? 'text-black-50' : 'text-white-50'
                }`}
              >
                {user?.displayName?.split(' ')[0]}
              </p>
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : 'https://wallpapers-clan.com/wp-content/uploads/2022/12/anonymous-pfp-1.jpg'
                }
                className='w-[48px] h-[48px] object-cover rounded-full cursor-pointer'
                loading='lazy'
              />
            </div>

            <div
              className={`absolute lg:top-[100px] top-[72px] right-0 origin-top-right ${
                showProfile ? 'scale-[1]' : 'scale-0'
              } duration-200 w-full md:w-auto`}
              onMouseLeave={() => setShowProfile(!showProfile)}
            >
              <UserProfile />
            </div>
          </div>
        )}

        {/* hamburger menu */}
        <div className='lg:hidden'>
          <Hamburger
            color='#5a72b6'
            toggled={isOpen}
            toggle={setOpen}
            size={30}
          />
        </div>
      </nav>
      {/* horizontal row */}
      {window.location.pathname !== '/' && (
        <div className='xl:h-[3px] h-[2px] w-full bg-primary-800'> </div>
      )}
    </header>
  );
};

export default Navbar;
