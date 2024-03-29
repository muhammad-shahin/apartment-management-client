import Swal from 'sweetalert2';
import Heading from '../../../Components/Heading/Heading';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import useAxios from '../../../Hooks/useAxios';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import notAvailableAnim from '../../../assets/Animation/notAvailable.json';
import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import { IoTimeOutline } from 'react-icons/io5';
import { SlCalender } from 'react-icons/sl';

const Announcements = () => {
  PageTitle('Announcements || Linden Apartment Management');
  const secureAxios = useAxios();

  // get requested apartment data
  const {
    data: allAnnouncementData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getAllAnnouncement'],
    queryFn: async () => {
      const res = await secureAxios.get(`/announcement`);
      return res.data;
    },
  });

  // handle error
  if (isError) {
    console.log('Failed to Load your announcement data : ', error);
    Swal.fire({
      title: 'Failed To Fetch Data! Please Try Again :)',
      confirmButtonText: 'Try Again',
      icon: 'error',
    }).then((result) => {
      if (result.isConfirmed) {
        refetch();
      }
    });
  }

  // handle loading
  if (isLoading || isPending) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='lg:text-5xl text-2xl text-center gradient-text py-3'>
          Loading Please Wait
        </h1>
        <Lottie
          loop
          animationData={loadingAnimation}
        />
      </div>
    );
  }

  // handle no data found
  if (!allAnnouncementData || allAnnouncementData?.length === 0) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4 px-[5%]'>
        <h1 className='text-5xl text-center gradient-text'>
          No Apartment Data Available
        </h1>
        <Lottie
          loop
          animationData={notAvailableAnim}
        />
      </div>
    );
  }
  return (
    <div className='container mx-auto'>
      <Heading
        title='All Announcements'
        className='text-primary-700'
      />
      <div className='space-y-8 pb-10'>
        {allAnnouncementData?.map((announcement) => (
          <div
            key={announcement._id}
            className='text-center bg-primary-500 text-white-50 py-5 lg:max-w-[60vw] mx-auto fade-up lg:px-0 px-[5%]'
            style={{ animationDuration: '0.5s' }}
          >
            <h3
              className='lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-medium  dark:text-white-50 fade-up'
              style={{ animationDuration: '0.7s' }}
            >
              {announcement.announcementTitle}
            </h3>
            {/* date & time */}
            <div
              className='flex justify-center items-center gap-4 fade-up'
              style={{ animationDuration: '0.8s' }}
            >
              <div className='flex justify-center items-center gap-2 pt-2 pb-1 uppercase'>
                <SlCalender className='dark:text-black-50 text-[18px] opacity-80' />
                <p className='font-QuickSand font-medium text-sm lg:text-base'>
                  {announcement.announcementDate}
                </p>
              </div>
              <div className='flex justify-center items-center gap-2 pt-2 pb-1 uppercase'>
                <IoTimeOutline className='dark:text-black-50 text-[18px] opacity-80' />
                <p className='font-QuickSand font-medium text-sm lg:text-base'>
                  {announcement.announcementTime}
                </p>
              </div>
            </div>
            <hr className='my-4' />
            <p
              className='font-QuickSand font-medium text-base lg:text-2xl max-w-5xl mx-auto lg:leading-[60px] lg:pt-3 lg:pb-6 fade-up text-left lg:text-center'
              style={{ animationDuration: '0.9s' }}
            >
              {announcement.announcementDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
