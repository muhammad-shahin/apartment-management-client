import DashboardTable from '../../../Shared/DashboardTable';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import TableActionButtons from '../../../Shared/TableActionButtons';
import Heading from '../../../Components/Heading/Heading';
import AllAgreementRequests from '../../../api/AllAgreementRequests';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineDone } from 'react-icons/md';
import useAxios from '../../../Hooks/useAxios';

const AgreementRequest = () => {
  PageTitle('Profile | Linden Apartment Management ');
  const secureAxios = useAxios();
  let emptyTable = false;
  const pendingRequestsTableHeadData = [
    '#',
    'User Name',
    'User Email',
    'Floor No',
    'Block Name',
    'Apartment No',
    'Rent',
    'Request Date',
    'Action',
  ];
  const acceptedRequestsTableHeadData = [
    '#',
    'User Name',
    'User Email',
    'Floor No',
    'Block Name',
    'Apartment No',
    'Rent',
    'Accepted Date',
    'User Role',
  ];
  const { isLoading, isPending, isError, error, refetch, allRequests } =
    AllAgreementRequests();
  const pendingRequest = allRequests?.filter(
    (request) => request.bookingStatus === 'Pending'
  );
  const acceptedRequest = allRequests?.filter(
    (request) => request.acceptedDate !== 'Pending'
  );

  // handle error
  if (isError) {
    console.log('Failed to Load your requested apartment data : ', error);
    Swal.fire({
      title: 'Failed To Fetch Data! Please Try Again :)',
      confirmButtonText: 'Try Again',
      icon: 'error',
    }).then((result) => {
      if (result.isConfirmed) {
        refetch();
      }
    });
  }

  // handle loading
  if (isLoading || isPending) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='lg:text-5xl text-2xl text-center gradient-text py-3'>
          Loading Please Wait
        </h1>
        <Lottie
          loop
          animationData={loadingAnimation}
        />
      </div>
    );
  }

  // handle no data found
  if (!allRequests || allRequests?.length === 0) {
    emptyTable = true;
  }

  // handle accept request
  const handleAcceptRequest = (id, userName) => {
    const updateStatus = { bookedApartmentId: id };
    secureAxios.put('/booked-apartments', updateStatus).then((res) => {
      if (res?.data.success && res?.data.insertedId) {
        refetch();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Agreement Request Accepted. ${userName} is Member Now!`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  // handle reject request
  const handleRejectRequest = (id) => {
    secureAxios.delete(`/booked-apartments/${id}`).then((res) => {
      if (res?.data.deletedCount > 0 && res?.data.acknowledged) {
        refetch();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Agreement Request Rejected Successfully!`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

  return (
    <div className='bg-primary-50 lg:min-h-[88vh] min-h-[100vh] leading-none px-[5%] lg:px-0 w-full mx-auto'>
      {/* pending renting request */}
      <div className='container mx-auto'>
        <Heading
          title='All Pending Renting Requests'
          className='text-primary-600'
        />
        <DashboardTable
          emptyTable={emptyTable}
          tableHead={pendingRequestsTableHeadData}
          className='min-w-[70vw]'
        >
          {pendingRequest?.map((requested, index) => (
            <tr
              key={requested?.apartment?.blockName + index}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {requested?.user?.userName}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.user?.userEmail}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.apartment.floorNo}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.apartment.blockName}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.apartment.apartmentNo}
              </td>
              <td className='border border-primary-700 p-2'>
                ${requested?.apartment.rent.toFixed(2)}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.bookingDate}
              </td>
              <td className='border border-primary-700 p-2'>
                <TableActionButtons>
                  <button
                    className='bg-blue-400 rounded-full p-2 hover:bg-green-600 hover:text-white-50 duration-300'
                    title='Accept Request'
                    onClick={() =>
                      handleAcceptRequest(
                        requested._id,
                        requested?.user.userName
                      )
                    }
                  >
                    <MdOutlineDone className='text-[22px] text-white' />
                  </button>
                  <button
                    className='bg-blue-400 rounded-full p-2 hover:bg-red-600 hover:text-white-50 duration-300'
                    title='Cancel Request'
                    onClick={() => handleRejectRequest(requested._id)}
                  >
                    <RxCross2 className='text-[22px] text-white' />
                  </button>
                </TableActionButtons>
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>
      {/* accepted renting request */}
      <div className='container mx-auto'>
        <Heading
          title='All Accepted Renting Requests'
          className='text-primary-600'
        />
        <DashboardTable
          emptyTable={emptyTable}
          tableHead={acceptedRequestsTableHeadData}
          className='min-w-[70vw]'
        >
          {acceptedRequest?.map((requested, index) => (
            <tr
              key={requested?.apartment?.blockName + index}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {requested?.user?.userName}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.user?.userEmail}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.apartment.floorNo}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.apartment.blockName}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.apartment.apartmentNo}
              </td>
              <td className='border border-primary-700 p-2'>
                ${requested?.apartment.rent.toFixed(2)}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested?.acceptedDate}
              </td>
              <td className='border border-primary-700 p-2 uppercase'>
                {requested?.user.userRole}
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>
    </div>
  );
};

export default AgreementRequest;
