import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import useRegisteredUser from './useRegisteredUser';

const useManageMember = () => {
  const secureAxios = useAxios();
  const registeredUser = useRegisteredUser();
  const shouldFetchData = registeredUser?._id ? true : false;
  const {
    data: allMembersData = [],
    isLoading,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['getPaymentHistory'],
    queryFn: async () => {
      const res = await secureAxios.get(`/users`);
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
      allMembersData,
    };
  }
};

export default useManageMember;
