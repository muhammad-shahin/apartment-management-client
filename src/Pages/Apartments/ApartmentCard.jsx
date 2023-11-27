import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { MdApartment, MdFollowTheSigns } from 'react-icons/md';
import { AiOutlineApartment } from 'react-icons/ai';
import square from '../../assets/icons/square.svg';
import bedroom from '../../assets/icons/bedroom.svg';
import bathroom from '../../assets/icons/bathroom.svg';
import SecondaryButton from '../../Shared/SecondaryButton';
const ApartmentCard = ({ cardData }) => {
  return (
    <div className='p-4 border border-primary-500 rounded-lg dark:bg-primary-500 dark:text-white-50'>
      <div>
        <img
          src='https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-property-460x300.jpg'
          className='rounded-md object-cover max-h-[300px] w-full'
          loading='lazy'
        />
      </div>

      {/* location */}
      <div className='flex lg:justify-start justify-center items-center gap-1 pt-2 pb-1'>
        <CiLocationOn className='text-gray-400 dark:text-black-50 lg:text-[22px]' />
        <p className='font-QuickSand font-medium text-sm lg:text-lg'>
          Apartment - Gulshan Ave
        </p>
      </div>

      {/* apartment title & desc */}
      <div className='md:text-left text-center'>
        <p className='text-xl lg:text-5xl'>South Sun House</p>
        <p className='font-QuickSand font-medium text-sm lg:text-lg'>
          Lorem ipsum dolor sit amet, wisi nemore fastidii at vis, eos equidem
          admodum
        </p>
      </div>

      {/* block name, apartment no, floor no */}
      <div className='flex lg:justify-between justify-center items-center flex-wrap py-4 lg:gap-0 gap-2'>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <MdApartment className='text-gray-400 dark:text-black-50 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Block Name - C
          </p>
        </div>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <MdFollowTheSigns className='text-gray-400 dark:text-black-50 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            BLOCK No - 13c
          </p>
        </div>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <AiOutlineApartment className='text-gray-400 dark:text-black-50 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Apt. no - 125A
          </p>
        </div>
      </div>

      <hr />

      {/* price & apartment features */}
      <div className='flex lg:justify-between justify-center items-center flex-wrap py-6 lg:gap-0 gap-4'>
        <p className='text-xl lg:text-2xl font-QuickSand font-semibold'>
          6,500$
        </p>
        <div className='flex lg:justify-between justify-center items-center gap-4'>
          <div className='flex justify-start items-center gap-1'>
            <img
              src={square}
              loading='lazy'
              className='w-[24px]'
            />
            <p className='font-QuickSand font-medium text-sm lg:text-lg'>
              290m<sup>2</sup>
            </p>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <img
              src={bedroom}
              loading='lazy'
              className='w-[24px]'
            />
            <p className='font-QuickSand font-medium text-sm lg:text-lg'>
              290m<sup>2</sup>
            </p>
          </div>
          <div className='flex justify-start items-center gap-1'>
            <img
              src={bathroom}
              loading='lazy'
              className='w-[24px]'
            />
            <p className='font-QuickSand font-medium text-sm lg:text-lg'>
              290m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>

      {/* action buttons */}
      <div className='flex justify-between items-center'>
        <SecondaryButton
          text='Agreement'
          className='rounded-full lg:py-[6px]'
        />
        <SecondaryButton
          text='View Details'
          className='rounded-full lg:py-[6px]'
        />
      </div>
    </div>
  );
};

ApartmentCard.propTypes = {
  cardData: PropTypes.object,
};

export default ApartmentCard;
