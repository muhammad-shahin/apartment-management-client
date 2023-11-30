const calculateApartmentData = (
  allBookedApartmentData,
  totalApartmentCount
) => {
  const total = totalApartmentCount;
  const booked = allBookedApartmentData?.length;
  const available = total - booked;
  const percentageAvailable = (available / total) * 100;
  console.log(total, booked, available, percentageAvailable);

  return {
    percentageAvailable,
  };
};

export default calculateApartmentData;
