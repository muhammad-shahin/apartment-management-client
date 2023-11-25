import Heading from '../Heading/Heading';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import bannerData from '../../assets/data/newBannerData.json';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import './AboutBuilding.css';

const AboutBuilding = () => {
  return (
    <div className='container mx-auto'>
      <Heading
        title='About Building'
        subTitle='the art of living'
      />
      <div className='flex justify-between items-center'>
        {/* left side content */}
        <div
          className='space-y-4'
          data-aos='fade-right'
          data-aos-easing='linear'
          data-aos-duration='500'
        >
          <h3
            className={` text-[2.5rem] lg:text-[5rem] text-justify pb-4 md:mt-[-20px] max-w-[520px] leading-none dark:text-white-50 fade-up`}
            style={{ animationDuration: '0.7s' }}
          >
            The Concept of Luxury
          </h3>
          <p className='max-w-[520px] font-QuickSand text-gray-600 dark:text-gray-300 md:text-xl text-lg'>
            Group One is excited to present this exeptional property in the
            prestegious location of London City. Designed by Lucy De Vito and
            built in the 2020 to a very high standard, this spectacular
            residence has been thoughtfully designed for family living in an
            uncluttered and special space.s
          </p>
        </div>
        {/* right side */}
        <div
          className='lg:max-w-[700px] relative'
          data-aos='fade-left'
          data-aos-easing='linear'
          data-aos-duration='500'
        >
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.nav-next',
              prevEl: '.nav-prev',
              enabled: true,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='w-full'
            cssMode={true}
            autoplay={{ delay: 3000 }}
          >
            {/* navigation buttons */}
            <div className='flex justify-between items-center absolute top-[50%] left-0 z-[100] w-full px-[5%]'>
              <BsFillArrowRightCircleFill className='nav-prev rotate-[-180deg]' />
              <BsFillArrowRightCircleFill className='nav-next' />
            </div>
            {bannerData.map((banner, index) => (
              <div key={'imageSlider' + index}>
                {banner.bannerType === 'image' && (
                  <SwiperSlide className='w-full min-h-full'>
                    <div className='relative rounded-md overflow-hidden min-h-full'>
                      <img
                        src={banner.bannerImage}
                        className='w-full min-h-full object-cover'
                      />
                      <div className='bg-black-50 bg-opacity-60 w-full py-3 text-center absolute bottom-0 left-0 text-white-50 text-xl lg:text-3xl'>
                        {banner.bannerTitle}
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
