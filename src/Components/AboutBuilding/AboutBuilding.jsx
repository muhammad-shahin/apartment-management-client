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
import { useRef } from 'react';
import useScroll from '../../Hooks/useScroll';

const AboutBuilding = () => {
  const leftDivRef = useRef(null);
  useScroll(leftDivRef, 'fade-up');
  const rightDivRef = useRef(null);
  useScroll(rightDivRef, 'fade-down');
  return (
    <div className=''>
      <Heading
        title='About Building'
        subTitle='the art of living'
      />
      <div className='flex xl:justify-between justify-center items-center lg:flex-row flex-col flex-wrap lg:gap-4 gap-8'>
        {/* left side content */}
        <div
          className='space-y-4 fade-up'
          style={{ animationDuration: '0.7s' }}
          ref={leftDivRef}
        >
          <h3
            className={` text-[2.5rem] xl:text-[5rem] xl:text-justify text-center pb-4 xl:max-w-[520px] leading-none dark:text-white-50`}
          >
            The Concept of Luxury
          </h3>
          <p className='xl:max-w-[520px] font-QuickSand text-gray-600 dark:text-gray-300 xl:text-xl text-lg xl:text-justify text-center '>
            Group One is excited to present this exeptional property in the
            prestegious location of London City. Designed by Lucy De Vito and
            built in the 2020 to a very high standard, this spectacular
            residence has been thoughtfully designed for family living in an
            uncluttered and special space.s
          </p>
        </div>
        {/* right side */}
        <div
          className='lg:max-w-[700px] w-full relative fade-down'
          style={{ animationDuration: '0.7s' }}
          ref={rightDivRef}
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
