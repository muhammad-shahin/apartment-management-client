import PropTypes from 'prop-types';
import { RxUpdate } from 'react-icons/rx';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';

const TableActionButtons = ({
  children,
  add,
  remove,
  update,
  handleUpdate,
  handleRemove,
  handleAdd,
}) => {
  return (
    <div className='flex justify-center items-center gap-3'>
      {add && (
        <button
          className='bg-blue-400 rounded-full p-2 hover:bg-primary-600 hover:text-white-50 duration-300'
          onClick={handleAdd}
          title={add}
        >
          <MdDone className='text-[22px] text-white' />
        </button>
      )}
      {remove && (
        <button
          className='bg-blue-400 rounded-full p-2 hover:bg-primary-600 hover:text-white-50 duration-300'
          onClick={handleUpdate}
          title={update}
        >
          <RxUpdate className='text-[22px] text-white' />
        </button>
      )}
      {update && (
        <button
          className='bg-blue-400 rounded-full p-2 hover:bg-primary-600 hover:text-white-50 duration-300'
          onClick={handleRemove}
          title={remove}
        >
          <RiDeleteBin6Line className='text-[22px] text-white' />
        </button>
      )}
      {children}
    </div>
  );
};

TableActionButtons.propTypes = {
  children: PropTypes.node,
  add: PropTypes.string,
  remove: PropTypes.string,
  update: PropTypes.string,
  handleRemove: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleAdd: PropTypes.func,
};

export default TableActionButtons;
