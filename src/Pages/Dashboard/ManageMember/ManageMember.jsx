import Swal from 'sweetalert2';
import Heading from '../../../Components/Heading/Heading';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import DashboardTable from '../../../Shared/DashboardTable';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../assets/Animation/loadingAnimation.json';
import useManageMember from '../../../Hooks/useManageMember';
import TableActionButtons from '../../../Shared/TableActionButtons';
import { IoPersonRemove, IoPersonAdd } from 'react-icons/io5';
import useAxios from '../../../Hooks/useAxios';

const ManageMember = () => {
  PageTitle('Manage Members | Linden Apartment Management');
  const secureAxios = useAxios();
  let emptyTable = false;
  const paymentHistoryTableHead = [
    '#',
    'User Name',
    'User Email',
    'User Role',
    'Auth UID',
    'Account Created',
    'Action',
  ];
  const { isLoading, isPending, isError, error, refetch, allMembersData } =
    useManageMember();

  // handle error
  if (isError) {
    console.log('Failed to Load your Manage All Members data : ', error);
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
  if (!allMembersData || allMembersData?.length === 0) {
    emptyTable = true;
  }

  // handle remove from user
  const handleRemoveUser = (userId) => {
    const updatedUserInfo = { userId, newRole: 'member' };
    console.log(updatedUserInfo);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Update Role',
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios
          .put('/users', updatedUserInfo)
          .then((res) => {
            console.log(res.data);
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User Role Changed Successfully',
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => {
            console.log('remove user role error', err);
          });
      }
    });
  };
  return (
    <div className='min-h-[100%]'>
      {/* recent apartment renting request */}
      <div className='container mx-auto'>
        <Heading
          title='Manage All Members'
          className='text-primary-700'
        />
        <DashboardTable
          emptyTable={emptyTable}
          tableHead={paymentHistoryTableHead}
        >
          {allMembersData?.map((user, index) => (
            <tr
              key={user?._id}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {user?.userName}
              </td>
              <td className='border border-primary-700 p-2'>
                {user?.userEmail}
              </td>
              <td className='border border-primary-700 p-2'>
                {user?.userRole}
              </td>
              <td className='border border-primary-700 p-2'>{user?.userId}</td>
              <td className='border border-primary-700 p-2'>
                {user?.userCreated ? user?.userCreated : 'N/A'}
              </td>
              <td className='border border-primary-700 p-2 uppercase'>
                <TableActionButtons>
                  <button
                    className='bg-blue-400 rounded-full p-2 hover:bg-red-600 hover:text-white-50 duration-300'
                    title='Remove Member'
                    onClick={() => handleRemoveUser(user.userId)}
                  >
                    <IoPersonRemove className='text-[22px] text-white' />
                  </button>
                  <button
                    className='bg-blue-400 rounded-full p-2 hover:bg-primary-600 hover:text-white-50 duration-300'
                    title='Remove Member'
                    onClick={() => handleRemoveUser(user.userId)}
                  >
                    <IoPersonAdd className='text-[22px] text-white' />
                  </button>
                </TableActionButtons>
              </td>
            </tr>
          ))}
        </DashboardTable>
      </div>
    </div>
  );
};

export default ManageMember;
