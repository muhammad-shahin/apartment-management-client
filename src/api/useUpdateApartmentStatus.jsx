import useAxios from '../Hooks/useAxios';

const useUpdateApartmentStatus = (
  apartmentObjectId,
  updatedStatus,
  refetch
) => {
  const secureAxios = useAxios();

  secureAxios
    .put('/apartments', { apartmentObjectId, updatedStatus })
    .then((res) => {
      refetch();
      console.log('Updated Apartment Status :', res.data?.success);
    })
    .catch((err) => {
      console.log('Updated Apartment Status error  : ', err);
    });
};

export default useUpdateApartmentStatus;
