import PrimaryButton from '../../Shared/PrimaryButton';
import './NewBanner.css';
import { TfiKey } from 'react-icons/tfi';
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
  }, 10000);
  return (
    <div className='absolute top-0 left-0 w-full max-h-screen bg-primary-500 z-[-100]'>
      {/* <AdsSlider /> */}
      <div className='overflow-hidden'>
        <div
          className={`flex duration-300 `}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* all slide */}
          {bannerData?.map((banner) => (
            <div
              key={banner.id}
              className='min-w-full  max-h-screen relative'
            >
              {banner.bannerType === 'image' ? (
                <img
                  src={banner.bannerImage}
                  className='object-cover h-full w-full'
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
                <TfiKey className='text-[58px] text-white-50 rotate-[45deg] opacity-75' />
                <p className='text-white-50 text-[0.9rem] lg:text-[1rem] text-center font-QuickSand font-thin uppercase'>
                  {banner.bannerSubTitle}
                </p>
                <p className='text-white-50 text-[2.5rem] lg:text-[6rem] text-center pb-4 mt-[-20px]'>
                  {banner.bannerTitle}
                </p>
                <PrimaryButton text='Discover More' />
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
      </div>
    </div>
  );
};

export default NewBanner;
