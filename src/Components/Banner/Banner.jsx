/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
// import bgVideo from '../../assets/video/bgVideo.mp4';
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bannerData, setBannerData] = useState([]);
  const handleBrandBtnClick = (index) => {
    setCurrentSlide(index);
  };
  useEffect(() => {
    fetch('/bannerContent.json')
      .then((res) => res.json())
      .then((data) => {
        setBannerData(data);
      });
  }, []);
  const prevSlide = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide(Math.min(currentSlide + 1, bannerData.length));
  };

  // move to next banner after 10s
  const moveToNextSlide = () => {
    const nextSlideIndex = (currentSlide + 1) % bannerData.length;
    setCurrentSlide(nextSlideIndex);
  };

  // this code will slide the banner automatically after 10s
  useEffect(() => {
    const slideTimer = setTimeout(moveToNextSlide, 10000);

    return () => {
      clearTimeout(slideTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, bannerData]);

  return (
    <section className='absolute top-0 left-0 z-[-100]'>
      {/* slider for banner */}
      <div className='slider relative'>
        <div className='slider-content'>
          <div
            className='slide'
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {/* other slide */}
            {bannerData?.map((banner, index) => (
              <div
                key={index}
                className='slide-item w-full h-screen relative '
              >
                {/* background image/ video */}
                <div className='w-'>
                  <img
                    className='w-screen object-cover'
                    src={banner.bannerImage}
                    loading='lazy'
                  ></img>
                  {/* overlay effects */}
                  <div className='overlay'></div>
                </div>
                <p className='text-white-50 text-6xl'>Hello Ji </p>

                {/* banner content */}
                {/* <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                  <h2 className='text-[18px] lg:text-[100px] font-bold uppercase text-center text-white-50'>
                    {' '}
                    Hello Ji
                    {banner.productName}
                  </h2>
                </div> */}
              </div>
            ))}
          </div>
        </div>
        {/* logo buttons */}
        <div className='absolute bottom-[5%] left-[50%] translate-x-[-50%]'>
          <div className='rounded-full bg-gray-100 backdrop-blur-[20px] lg:px-4 px-2 lg:py-2 py-1 bg-opacity-[0.2] flex justify-center items-center gap-2'>
            <div
              className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full bg-white font-medium flex justify-center items-center leading-none text-[22px] opacity-[0.8] overflow-hidden cursor-pointer custom-border hover:border-[3px] hover:border-primary-500 duration-500 ${
                currentSlide === 0
                  ? 'border-[3px] border-primary-500'
                  : 'border[3px] border-transparent'
              }`}
              onClick={() => handleBrandBtnClick(0)}
            >
              <img
                src={'https://i.ibb.co/h9s85mT/gucci-logo.png'}
                loading='lazy'
              />
            </div>
            {bannerData.map((banner, index) => (
              <div
                key={index}
                className={`lg:w-[50px] lg:h-[50px] w-[30px] h-[30px] rounded-full bg-white font-medium flex justify-center items-center leading-none text-[22px] opacity-[0.8] overflow-hidden cursor-pointer custom-border hover:border-[3px] hover:border-primary-500 ${
                  index - currentSlide === 0
                    ? 'border-[3px] border-primary-500'
                    : 'border[3px] border-transparent'
                } duration-500`}
                onClick={() => handleBrandBtnClick(index)}
              >
                <img
                  src={banner.brandLogo}
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
