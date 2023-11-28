import PropTypes from 'prop-types';

const DashboardTable = ({ children, tableHead }) => {
  return (
    <div className='py-6 overflow-auto'>
      <table className='w-full mx-auto min-w-[60vw]'>
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
          {children ? (
            children
          ) : (
            <>
              <tr className='border border-primary-700'>
                {tableHead.map((data, index) => (
                  <td
                    key={'noData' + index}
                    className='border border-primary-700 p-2'
                  >
                    N/A
                  </td>
                ))}
              </tr>
            </>
          )}
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
