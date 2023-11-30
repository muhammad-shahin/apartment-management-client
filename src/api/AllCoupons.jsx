import { useQuery } from '@tanstack/react-query';
import useAxios from '../Hooks/useAxios';

const AllCoupons = () => {
  const secureAxios = useAxios();
  const {
    data: allCouponsData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getAllCoupons'],
    queryFn: async () => {
      const res = await secureAxios.get(`/coupon`);
      return res.data;
    },
  });
  if (!isError || !isLoading || !isPending) {
    // const allRequests = AllCouponsData?.bookedApartments;
    return {
      isLoading,
      isPending,
      isError,
      error,
      refetch,
      allCouponsData,
    };
  }
};

export default AllCoupons;
