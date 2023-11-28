import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useRegisteredUser = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const secureAxios = useAxios();
  const {
    data: registeredUser = {},
    isLoading,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['getRegisteredUser', userData],
    queryFn: async () => {
      const res = await secureAxios.get(`/users?uid=${userData?.uid}`);

      return res?.data?.registeredUser;
    },
    initialData: null,
  });
  if (!isError || !isLoading || !isPending) {
    return registeredUser;
  }
};

export default useRegisteredUser;
