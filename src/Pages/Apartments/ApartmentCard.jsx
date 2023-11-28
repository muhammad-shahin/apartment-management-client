import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { MdApartment, MdFollowTheSigns } from 'react-icons/md';
import { AiOutlineApartment } from 'react-icons/ai';
import square from '../../assets/icons/square.svg';
import bedroom from '../../assets/icons/bedroom.svg';
import bathroom from '../../assets/icons/bathroom.svg';
import SecondaryButton from '../../Shared/SecondaryButton';
const ApartmentCard = ({ cardData, handleAgreement }) => {
  const {
    apartmentImages,
    location,
    apartmentName,
    blockName,
    floorNo,
    apartmentNo,
    rent,
    size,
    totalBedroom,
    totalBathroom,
    details,
    _id,
  } = cardData;

  return (
    <div className='p-4 border border-primary-500 rounded-lg dark:bg-primary-500 dark:text-white-50'>
      <div>
        <img
          src={apartmentImages[0]}
          className='rounded-md object-cover h-[200px] lg:h-[300px] w-full'
          loading='lazy'
        />
      </div>

      {/* location */}
      <div className='flex lg:justify-start justify-center items-center gap-1 pt-2 pb-1'>
        <CiLocationOn className='text-gray-400 dark:text-black-50 lg:text-[22px]' />
        <p className='font-QuickSand font-medium text-sm lg:text-lg'>
          Apartment - {location}
        </p>
      </div>

      {/* apartment title & desc */}
      <div className='md:text-left text-center space-y-6 mt-3'>
        <p className='text-xl lg:text-5xl lg:min-h-[100px]'>{apartmentName}</p>
        <p className='font-QuickSand font-medium text-sm lg:text-lg'>
          {details.slice(0, 100)}
        </p>
      </div>

      {/* block name, apartment no, floor no */}
      <div className='flex lg:justify-between justify-center items-center flex-wrap py-4 lg:gap-0 gap-2'>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <MdApartment className='text-gray-400 dark:text-black-50 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Block - {blockName}
          </p>
        </div>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <MdFollowTheSigns className='text-gray-400 dark:text-black-50 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Floor - {floorNo}
          </p>
        </div>
        <div className='flex justify-start items-center gap-1 pt-2 pb-1 uppercase'>
          <AiOutlineApartment className='text-gray-400 dark:text-black-50 text-[18px]' />
          <p className='font-QuickSand font-medium text-sm lg:text-base'>
            Apt. no - {apartmentNo}
          </p>
        </div>
      </div>

      <hr />

      {/* price & apartment features */}
      <div className='flex lg:justify-between justify-center items-center flex-wrap py-6 lg:gap-0 gap-4'>
        <p className='text-xl lg:text-2xl font-QuickSand font-semibold'>
          {rent}$
        </p>
        <div className='flex lg:justify-between justify-center items-center gap-4'>
          <div className='flex justify-center items-center gap-1'>
            <img
              src={square}
              loading='lazy'
              className='w-[24px]'
            />
            <p className='font-QuickSand font-medium text-sm lg:text-xl'>
              {size}m<sup>2</sup>
            </p>
          </div>
          <div className='flex justify-center items-center gap-1'>
            <img
              src={bedroom}
              loading='lazy'
              className='w-[24px]'
            />
            <p className='font-QuickSand font-medium text-sm lg:text-xl'>
              {totalBedroom}
            </p>
          </div>
          <div className='flex justify-center items-center gap-1'>
            <img
              src={bathroom}
              loading='lazy'
              className='w-[24px]'
            />
            <p className='font-QuickSand font-medium text-sm lg:text-xl'>
              {totalBathroom}
            </p>
          </div>
        </div>
      </div>

      {/* action buttons */}
      <div className='flex justify-between items-center'>
        <SecondaryButton
          text='Agreement'
          className='rounded-full lg:py-[6px]'
          handleClick={() => handleAgreement(_id)}
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
  handleAgreement: PropTypes.func,
};

export default ApartmentCard;
