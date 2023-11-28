import { useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ApartmentCard from './ApartmentCard';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import Heading from '../../Components/Heading/Heading';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Apartments = () => {
  PageTitle('All Apartments - Apartment Management Web Application');
  const secureAxios = useAxios();
  const [currentPage, setCurrentPage] = useState(0);
  let totalApartment = 0;
  const {
    data: apartmentsData,
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getApartments', currentPage],
    queryFn: async () => {
      const res = await secureAxios.get(`/apartments?page=${currentPage}`);
      return res.data;
    },
  });

  // handle error
  if (isError) {
    console.log('Failed to Load all apartment data : ', error);
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
  if (
    !apartmentsData?.allApartment ||
    apartmentsData?.allApartment.length === 0
  ) {
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

  // get total pages needed according to total data found from server
  if (apartmentsData?.totalApartmentsCount) {
    totalApartment = apartmentsData?.totalApartmentsCount;
  }
  let totalPages = Math.ceil(totalApartment / 6);
  const pages = [...new Array(totalPages).fill(0)];

  // handle pagination
  const handlePageChange = (move) => {
    if (move === 'next' && currentPage + 1 !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (move === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='container mx-auto py-20 lg:px-0 px-[5%]'>
      <Heading
        title='All Apartment List'
        className='text-primary-700'
      />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center flex-wrap xl:gap-12 gap-6'>
        {apartmentsData?.allApartment?.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            cardData={apartment}
          />
        ))}
      </div>

      {/* pagination buttons */}
      <div className='flex justify-center items-center flex-wrap gap-6 py-10'>
        {/* previous button */}
        <button
          className='rounded-full p-2 bg-primary-600 flex justify-center items-center border-2 border-transparent hover:border-primary-600 hover:bg-transparent-50 duration-500 group'
          onClick={() => handlePageChange('prev')}
        >
          <AiOutlineArrowRight className='text-[38px] text-white-50 group-hover:text-primary-600 rotate-[180deg]' />
        </button>
        {/* all pages number */}

        {pages.map((value, index) => (
          <button
            key={index}
            className={`lg:w-[58px] w-[40px] lg:h-[58px] h-[40px] rounded-full p-2 hover:bg-[#4d5ef8] flex justify-center items-center border-2 hover:border-transparent border-primary-600 duration-500 font-semibold lg:text-2xl text-lg text-primary-600 hover:text-white-50 ${
              index === currentPage
                ? 'bg-[#4d5ef8] text-white-50 border-tertiary'
                : 'bg-transparent-50'
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}

        {/* next button */}
        <button
          className='rounded-full p-2 bg-primary-600 flex justify-center items-center border-2 border-transparent hover:border-primary-600 hover:bg-transparent-50 duration-500 group'
          onClick={() => handlePageChange('next')}
        >
          <AiOutlineArrowRight className='text-[38px] text-white-50 group-hover:text-primary-600' />
        </button>
      </div>
    </div>
  );
};

export default Apartments;
