import { useQuery } from '@tanstack/react-query';
import useAxios from '../Hooks/useAxios';

const AllAgreementRequests = () => {
  const secureAxios = useAxios();
  const {
    data: allAgreementRequestsData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getAllAgreementRequests'],
    queryFn: async () => {
      const res = await secureAxios.get(`/booked-apartments`);
      return res.data;
    },
  });
  if (!isError || !isLoading || !isPending) {
    const allRequests = allAgreementRequestsData?.bookedApartments;
    return {
      isLoading,
      isPending,
      isError,
      error,
      refetch,
      allRequests,
    };
  }
};

export default AllAgreementRequests;
