import Heading from '../Heading';
import square from '../../../assets/icons/square.svg';
import bedroom from '../../../assets/icons/bedroom.svg';
import bathroom from '../../../assets/icons/bathroom.svg';
import SecondaryButton from '../../../Shared/SecondaryButton';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const FloorPlan = () => {
  return (
    <div className='container mx-auto px-[5%] xl:px-0'>
      <Heading title='Floor Plan' />
      <div className='flex xl:justify-between items-center justify-center gap-6 xl:gap-20 flex-col xl:flex-row'>
        {/* left side content */}
        <div className='w-full'>
          <img
            src='https://firstsight.design/linden/demo/wp-content/uploads/2022/10/plan.svg'
            alt='apartment floor plan'
            loading='lazy'
            className='w-full'
          />
        </div>
        {/* right side content */}
        <div className='w-full space-y-8'>
          <h3 className='xl:max-w-[720px] text-center title xl:text-left'>
            Explore Our Thoughtfully Designed Floor Plans
          </h3>
          <p className='xl:max-w-[720px] text-center desc xl:text-left'>
            This spacious triple aspect home is spread across 864 sq ft of
            living space and features a master bedroom suite with a walk through
            wardrobe. Additionally, this residence provides our owners with
            private garden.
          </p>
          {/* icons with features */}
          <div className='space-y-6'>
            <div className='flex justify-start items-center gap-3'>
              <img
                src={square}
                loading='lazy'
                className='w-[32px]'
              />
              <p className='xl:max-w-[720px] text-center desc xl:text-left'>
                Build surface: 864 sq. ft
              </p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img
                src={bedroom}
                loading='lazy'
                className='w-[32px]'
              />
              <p className='xl:max-w-[720px] text-center desc xl:text-left'>
                Bedrooms: ×3
              </p>
            </div>
            <div className='flex justify-start items-center gap-3'>
              <img
                src={bathroom}
                loading='lazy'
                className='w-[32px]'
              />
              <p className='xl:max-w-[720px] text-center desc xl:text-left'>
                Bathrooms: ×2
              </p>
            </div>
          </div>
          {/* download plan button */}
          <a
            href='https://firstsight.design/linden/demo/wp-content/uploads/2022/10/plan.svg'
            download='floor-plan.svg'
            target='_blank'
            rel='noreferrer'
            className='block'
          >
            <SecondaryButton
              text={'Download Plan'}
              icon={
                <FaCloudDownloadAlt className='group-hover:text-white-50 text-primary-500' />
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
