import calculateApartmentData from '../../../Services/calculateApartmentData';
import AllAgreementRequests from '../../../api/AllAgreementRequests';
import AllApartmentCount from '../../../api/AllApartmentCount';

const AdminStatistics = () => {
  const { totalApartmentCount } = AllApartmentCount();
  const { refetch, allRequests } = AllAgreementRequests();
  const { percentageAvailable } = calculateApartmentData(
    allRequests,
    totalApartmentCount
  );
  return (
    <div className='py-10'>
      <p className='text-3xl'>Total Room In Database : {totalApartmentCount}</p>
      <p className='text-3xl'>
        Total Room Available in Percentage : {percentageAvailable}
      </p>
    </div>
  );
};

export default AdminStatistics;
