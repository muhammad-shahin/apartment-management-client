import PrimaryButton from '../../Shared/PrimaryButton';
import './NewBanner.css';
import { BiKey } from 'react-icons/bi';
import { CiLocationArrow1, CiDollar } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import apartVid from '../../assets/video/banner-video.mp4';
import bannerData from '../../assets/data/newBannerData.json';
import { useState } from 'react';

const NewBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  setTimeout(() => {
    if (currentSlide + 1 === bannerData?.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }, 30000);
  return (
    <div className='absolute top-0 left-0 w-full max-h-screen bg-primary-500 z-[100]'>
      {/* <AdsSlider /> */}
      <div className='overflow-hidden'>
        <div
          className={`flex duration-300 `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* all slide */}
          {bannerData?.map((banner, index) => (
            <div
              key={banner.id}
              className='min-w-full  max-h-screen relative'
            >
              {banner.bannerType === 'image' ? (
                <img
                  src={banner.bannerImage}
                  className='object-cover lg:h-full h-screen w-full'
                  loading='lazy'
                />
              ) : (
                <video
                  className='w-full h-full object-cover'
                  src={apartVid}
                  autoPlay
                  loop
                  muted
                ></video>
              )}
              <div className='overlay opacity-60'></div>

              <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center'>
                <BiKey
                  className={`text-[58px] text-white-50  opacity-75 ${
                    index === currentSlide && 'fade-down'
                  }`}
                />
                {/* AnimatePresence for enter and exit animations */}

                <p
                  className={`text-white-50 text-[0.9rem] lg:text-[1rem] text-center font-QuickSand font-thin uppercase ${
                    index === currentSlide && 'fade-up'
                  }`}
                  style={{ animationDuration: '0.5s' }}
                >
                  {banner.bannerSubTitle}
                </p>
                <p
                  className={`text-white-50 text-[2.5rem] lg:text-[6rem] text-center pb-4 md:mt-[-20px] ${
                    index === currentSlide && 'fade-up'
                  }`}
                  style={{ animationDuration: '0.7s' }}
                >
                  {banner.bannerTitle}
                </p>
                <div
                  className={`${index === currentSlide && 'fade-up'}`}
                  style={{ animationDuration: '0.9s' }}
                >
                  <PrimaryButton text='Discover More' />
                </div>
                <div
                  className={`md:flex justify-between items-center w-full xl:px-[5%] px-[2%] xl:translate-y-[150px] lg:translate-y-[80px] hidden`}
                >
                  {/* left side */}
                  <div className='text-justify space-y-2 font-QuickSand font-medium uppercase'>
                    <div className='flex justify-center items-center gap-3'>
                      <CiLocationArrow1 className='text-[48px] text-white-50' />
                      <div>
                        <p className='text-white-50 text-lg lg:text-3xl'>
                          {banner.city}, BD
                        </p>
                        <p className='text-white-50 text-lg lg:text-2xl'>
                          {banner.address}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className='text-justify space-y-2 font-QuickSand font-medium uppercase'>
                    <div className='flex justify-center items-center gap-3'>
                      <CiDollar className='text-[48px] text-white-50' />
                      <div>
                        <p className='text-white-50 text-lg lg:text-3xl'>
                          Monthly RENT
                        </p>
                        <p className='text-white-50 text-lg lg:text-2xl'>
                          ${banner.monthlyRent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* slider buttons */}
      <div className='slider-buttons-container'>
        <div className='slider-buttons-wrapper'>
          {bannerData.map((banner, index) => (
            <div
              key={banner.id + 'bannerImage'}
              className={`slider-buttons-outer  ${
                currentSlide === index
                  ? 'border-primary-500'
                  : 'border-transparent-50'
              }`}
              onClick={() => handleSlideChange(index)}
            >
              {banner.bannerType === 'image' ? (
                <img
                  src={banner.bannerImage}
                  className='object-cover h-full w-full'
                  loading='lazy'
                />
              ) : (
                <video
                  className='w-full h-full object-cover'
                  src={apartVid}
                  autoPlay
                  loop
                  muted
                ></video>
              )}
            </div>
          ))}
        </div>
        {/* arrow down button */}
        <div
          className='absolute top-[-110px] left-[50%] translate-x-[-50%] arrow-bounce bg-primary-200 bg-opacity-75 rounded-full cursor-pointer hover:bg-primary-500 duration-300'
          title='See More'
        >
          <IoIosArrowDown className='lg:text-[48px] text-[38px] text-white-50' />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
