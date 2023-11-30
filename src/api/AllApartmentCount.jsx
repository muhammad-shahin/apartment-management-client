import { useQuery } from '@tanstack/react-query';
import useAxios from '../Hooks/useAxios';

const AllApartmentCount = () => {
  const secureAxios = useAxios();
  const {
    data: allApartmentCountData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getAllApartmentCount'],
    queryFn: async () => {
      const res = await secureAxios.get(`/apartments?count=true`);
      return res.data;
    },
  });
  if (!isError || !isLoading || !isPending) {
    const totalApartmentCount = allApartmentCountData?.totalCount;
    return {
      isLoading,
      isPending,
      isError,
      error,
      refetch,
      totalApartmentCount,
    };
  }
};

export default AllApartmentCount;
