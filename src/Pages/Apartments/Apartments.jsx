import { useState } from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ApartmentCard from './ApartmentCard';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';

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
  } = useQuery({
    queryKey: ['getApartments'],
    queryFn: async () => {
      const res = await secureAxios.get(`/apartments?page=${currentPage}`);
      return res.data;
    },
  });
  if (isError) {
    console.log(error);
  }
  if (!isLoading || !isPending) {
    console.log('allApartments : ', allApartments);
  }
  return (
    <div className='container mx-auto py-20 lg:px-0 px-[5%]'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center flex-wrap xl:gap-12 gap-6'>
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </div>
    </div>
  );
};

export default Apartments;
