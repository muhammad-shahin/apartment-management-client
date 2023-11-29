import Swal from 'sweetalert2';
import Heading from '../../../Components/Heading/Heading';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import usePaymentHistory from '../../../Hooks/usePaymentHistory';
import DashboardTable from '../../../Shared/DashboardTable';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';

const PaymentHistory = () => {
  PageTitle('Payment History | Linden Apartment Management');
  let emptyTable = false;
  const paymentHistoryTableHead = [
    '#',
    'Payment Date',
    'Payment Of Month',
    'Apartment No',
    'Paid Amount',
    'Payment Id',
    'Payment Method',
  ];
  const { isLoading, isPending, isError, error, refetch, paymentHistoryData } =
    usePaymentHistory();

  // handle error
  if (isError) {
    console.log('Failed to Load your history apartment data : ', error);
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
  if (!paymentHistoryData || paymentHistoryData?.length === 0) {
    emptyTable = true;
  }
  return (
    <div className='min-h-[100%]'>
      {/* recent apartment renting request */}
      <div className='container mx-auto'>
        <Heading
          title='Payment History'
          className='text-primary-700'
        />
        <DashboardTable
          emptyTable={emptyTable}
          tableHead={paymentHistoryTableHead}
        >
          {paymentHistoryData?.map((history, index) => (
            <tr
              key={history?.otherPaymentInfo?.paymentId}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {history?.paymentDate}
              </td>
              <td className='border border-primary-700 p-2'>
                {history?.paymentOfMonth}
              </td>
              <td className='border border-primary-700 p-2'>
                {history?.apartmentInfo.apartmentNo}
              </td>
              <td className='border border-primary-700 p-2'>
                {history?.otherPaymentInfo?.amount}
              </td>
              <td className='border border-primary-700 p-2'>
                {history?.otherPaymentInfo?.paymentId}
              </td>
              <td className='border border-primary-700 p-2 uppercase'>
                {history?.otherPaymentInfo?.method}
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>
    </div>
  );
};

export default PaymentHistory;
