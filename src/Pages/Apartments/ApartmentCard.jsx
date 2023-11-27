import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';

const ApartmentCard = () => {
  return (
    <div className='p-4 border border-primary-500 rounded-lg w-fit max-w-[30.875rem]'>
      <div>
        <img
          src='https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-property-460x300.jpg'
          className='rounded-md object-cover max-h-[300px] w-full'
        />
      </div>

      {/* location */}
      <div className='flex justify-start items-center gap-1 pt-2 pb-1'>
        <CiLocationOn className='text-gray-400 text-[22px]' />
        <p className='font-QuickSand font-medium text-sm lg:text-lg'>
          Apartment - Gulshan Ave
        </p>
      </div>

      {/* apartment title & desc */}
      <div>
        <p className='text-xl lg:text-5xl'>South Sun House</p>
        <p className='font-QuickSand font-medium text-sm lg:text-lg'>
          Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
          admodum
        </p>
      </div>

      {/* block name, apartment no, floor no */}
      <div className='flex lg:justify-between justify-center items-center flex-wrap pt-3'>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <CiLocationOn className='text-gray-400 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Block Name - C
          </p>
        </div>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <CiLocationOn className='text-gray-400 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            BLOCK No- 13c
          </p>
        </div>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <CiLocationOn className='text-gray-400 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Apt. no - 125A
          </p>
        </div>
      </div>
      <hr className='my-6' />
    </div>
  );
};

ApartmentCard.propTypes = {};

export default ApartmentCard;
