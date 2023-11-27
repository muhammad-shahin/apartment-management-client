import PropTypes from 'prop-types';
import SecondaryButton from './SecondaryButton';
import apartmentData from '../../public/apartmentData.json';

const DashboardTable = ({ children, tableHead }) => {
  return (
    <div className='py-6'>
      <table className='w-full border'>
        <thead>
          <tr className='bg-primary-500 text-white-50 text-2xl lg:text-3xl'>
            {tableHead.map((rowName, index) => (
              <th
                key={rowName + index}
                className='border border-gray-700 p-2'
              >
                {rowName}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='text-center font-QuickSand'>
          {apartmentData.map((requested, index) => (
            <tr
              key={requested.blockNo + index}
              className='border border-primary-700'
            >
              <td className='border border-primary-700 p-2'>{index + 1}</td>
              <td className='border border-primary-700 p-2'>
                {requested.requestDate}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested.blockNo}
              </td>
              <td className='border border-primary-700 p-2'>
                {requested.status}
              </td>
              <td className='border border-primary-700 p-2'>
                <SecondaryButton text='Action' />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DashboardTable.propTypes = {
  tableHead: PropTypes.array,
  children: PropTypes.node,
};

export default DashboardTable;
