import useManageMember from '../../../Hooks/useManageMember';
import calculateApartmentData from '../../../Services/calculateApartmentData';
import AllAgreementRequests from '../../../api/AllAgreementRequests';
import AllApartmentCount from '../../../api/AllApartmentCount';

const AdminStatistics = () => {
  const { totalApartmentCount } = AllApartmentCount();
  const { allRequests } = AllAgreementRequests();
  const { allMembersData } = useManageMember();
  const {
    percentageAvailable,
    percentageBooked,
    totalUserCount,
    totalMemberCount,
  } = calculateApartmentData(allRequests, totalApartmentCount, allMembersData);
  return (
    <div className='py-10'>
      <p className='text-3xl'>Total Room In Database : {totalApartmentCount}</p>
      <p className='text-3xl'>
        Total Room Available in Percentage : {percentageAvailable}%
      </p>
      <p className='text-3xl'>
        Total Room Booked in Percentage : {percentageBooked}%
      </p>
      <p className='text-3xl'>Total Users : {totalUserCount}</p>
      <p className='text-3xl'>Total Members : {totalMemberCount}</p>
    </div>
  );
};

export default AdminStatistics;
