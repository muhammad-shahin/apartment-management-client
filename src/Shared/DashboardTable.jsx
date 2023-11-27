import PropTypes from 'prop-types';
import SecondaryButton from './SecondaryButton';

const DashboardTable = ({ tableHead }) => {
  return (
    <div className='py-6'>
      <table className='w-full border'>
        <thead>
          <tr className='bg-primary-700 text-white-50 text-2xl lg:text-3xl'>
            <th className='border border-gray-700 p-2'>#</th>
            <th className='border border-gray-700 p-2'>Product Name</th>
            <th className='border border-gray-700 p-2'>Brand Name</th>
            <th className='border border-gray-700 p-2'>Category</th>
            <th className='border border-gray-700 p-2'>Action</th>
          </tr>
        </thead>

        <tbody className='text-center font-QuickSand'>
          <tr className='border border-primary-700'>
            <td className='border border-primary-700 p-2'>{'index + 1'}</td>
            <td className='border border-primary-700 p-2'>
              {'product.productName'}
            </td>
            <td className='border border-primary-700 p-2'>
              {'product.brandName'}
            </td>
            <td className='border border-primary-700 p-2'>
              {'product.productType'}
            </td>
            <td className='border border-primary-700 p-2'>
              <SecondaryButton text='Action' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

DashboardTable.propTypes = {
  tableHead: PropTypes.array,
};

export default DashboardTable;
