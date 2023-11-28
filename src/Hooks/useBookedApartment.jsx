import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import useRegisteredUser from './useRegisteredUser';

const useBookedApartment = () => {
  //   const userData = JSON.parse(localStorage.getItem('userData'));
  const secureAxios = useAxios();
  const registeredUser = useRegisteredUser();
  const shouldFetchData = registeredUser?._id ? true : false;
  const {
    data: requestedApartmentsData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getRequestedApartments'],
    queryFn: async () => {
      const res = await secureAxios.get(
        `/booked-apartments/${registeredUser?._id}`
      );
      return res.data;
    },
    enabled: shouldFetchData,
  });
  if (!isError || !isLoading || !isPending) {
    return {
      isLoading,
      isPending,
      isError,
      error,
      refetch,
      requestedApartmentsData,
    };
  }
};

export default useBookedApartment;
