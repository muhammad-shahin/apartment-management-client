const calculateApartmentData = (
  allBookedApartmentData,
  totalApartmentCount,
  allUsers
) => {
  const total = totalApartmentCount;
  const booked = allBookedApartmentData?.length;
  const available = total - booked;
  const percentageAvailable = (available / total) * 100;
  const percentageBooked = (booked / total) * 100;

  //   total users
  const totalUsers = allUsers?.filter((user) => user.userRole === 'user');
  const totalUserCount = totalUsers?.length;

  //   total members
  const totalMembers = allUsers?.filter((user) => user.userRole === 'member');
  const totalMemberCount = totalMembers?.length;

  return {
    percentageAvailable,
    percentageBooked,
    totalUserCount,
    totalMemberCount,
  };
};

export default calculateApartmentData;
