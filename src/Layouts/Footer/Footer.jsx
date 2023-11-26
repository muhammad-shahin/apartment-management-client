import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineMailOutline, MdOutlinePhone } from 'react-icons/md';
import PrimaryButton from '../../Shared/PrimaryButton';

const Footer = () => {
  return (
    <footer className='bg-black-50 py-20'>
      <div className='flex lg:justify-between justify-center items-center lg:items-start container mx-auto lg:flex-row flex-col gap-10 lg:gap-0'>
        {/* first col content */}
        <div className='text-white-50 lg:text-left text-center space-y-6'>
          {/* logo */}
          <div>
            <p className='xl:text-[58px] sm:text-[38px] xsm:text-[22px] leading-none uppercase'>
              Linden
            </p>
          </div>

          <p className='max-w-sm font-QuickSand font-medium text-lg opacity-75'>
            Premium service. Follow us for the latest news about real estate
          </p>

          {/* social icons */}
          <div className='flex lg:justify-start justify-center items-center gap-4'>
            <FaFacebookF className='text-white-50 text-[28px] opacity-75 hover:opacity-100 duration-300 cursor-pointer' />
            <FaInstagram className='text-white-50 text-[32px] opacity-75 hover:opacity-100 duration-300 cursor-pointer' />
            <FaLinkedin className='text-white-50 text-[32px] opacity-75 hover:opacity-100 duration-300 cursor-pointer' />
            <FaYoutube className='text-white-50 text-[32px] opacity-75 hover:opacity-100 duration-300 cursor-pointer' />
          </div>
        </div>

        {/* second col content */}
        <div className='text-white-50 lg:text-left text-center space-y-6'>
          {/* contact */}
          <div>
            <p className='lg:text-[32px] text-[24px] leading-none'>Contact</p>
          </div>
          <div className='font-QuickSand space-y-4'>
            <div className='flex justify-center lg:justify-start items-center gap-3 opacity-75'>
              <MdOutlineMailOutline className='text-white-50 text-[28px]' />
              contact@linden.com
            </div>
            <div className='flex justify-center lg:justify-start items-center gap-3 opacity-75'>
              <CiLocationOn className='text-white-50 text-[28px]' />
              10/2 Gulshan Avenue
            </div>
            <div className='flex justify-center lg:justify-start items-center gap-3 opacity-75'>
              <MdOutlinePhone className='text-white-50 text-[28px]' />
              +88018-577-71268
            </div>
          </div>
        </div>

        {/* third col content */}
        <div className='text-white-50 lg:text-left text-center space-y-6'>
          {/* get in touch */}
          <div className='space-y-4'>
            <p className='lg:text-[32px] text-[24px] leading-none'>
              Don’t Miss Last Insights
            </p>
            <p className='xl:text-[18px] sm:text-[18px] text-[14px] leading-none font-QuickSand'>
              Subscribe now and thank us later
            </p>
          </div>
          <div className='flex justify-center items-center flex-wrap gap-3'>
            <input
              type='email'
              className='lg:px-5 px-3 lg:py-3 py-2 border-2 border-white-50 bg-transparent-50 lg:min-w-[350px] lg:text-lg font-QuickSand outline-none'
              placeholder='muhammadshahin002@gmail.com'
            />
            <PrimaryButton text='Subscribe' />
          </div>
        </div>
      </div>
      <p className='container mx-auto mt-20 mb-10 bg-gray-500 h-[1px]'> </p>
      <small className='text-white-50 font-QuickSand font-medium opacity-40 text-center block'>
        © 2023 Copyright | All Rights Reserved By Linden Apartment
      </small>
    </footer>
  );
};

export default Footer;
