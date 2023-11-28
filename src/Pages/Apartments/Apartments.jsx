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

const Apartments = () => {
  PageTitle('All Apartments - Apartment Management Web Application');
  const secureAxios = useAxios();
  const [currentPage, setCurrentPage] = useState(0);

  // get total pages needed according to total data found from server
  // const totalPages = Math.ceil(totalCount / 6);
  // const pages = [...new Array(totalPages).fill(0)];

  const {
    data: allApartments,
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getApartments'],
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
  if (!allApartments || allApartments.length === 0) {
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
    <div className='container mx-auto py-20 lg:px-0 px-[5%]'>
      <Heading
        title='All Apartment List'
        className='text-primary-700'
      />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center flex-wrap xl:gap-12 gap-6'>
        {allApartments?.map((apartment) => (
          <ApartmentCard
            key={apartment._id}
            cardData={apartment}
          />
        ))}
      </div>
    </div>
  );
};

export default Apartments;
