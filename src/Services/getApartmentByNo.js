const getApartmentByNo = (apartmentData, apartmentNo) => {
  const selectedApartment = apartmentData.filter(
    (data) => data.apartment.apartmentNo === apartmentNo
  );
  return selectedApartment[0];
};

const getAllApartmentNo = (apartmentData) => {
  const allNo = apartmentData.map((data) => data.apartment.apartmentNo);
  return allNo;
};

export { getAllApartmentNo, getApartmentByNo };
