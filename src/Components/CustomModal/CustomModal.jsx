import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FcInfo } from 'react-icons/fc';

const CustomModal = ({
  children,
  CustomModalStatus,
  title,
  message,
  setCustomModalStatus,
  customIcon,
}) => {
  const customModal = useRef(null);

  useEffect(() => {
    if (CustomModalStatus) {
      customModal.current.showModal();
    } else {
      customModal.current.close();
    }
  }, [CustomModalStatus]);

  return (
    <dialog
      open
      id='CustomModal'
      ref={customModal}
      className='sticky top-0 left-0 w-full h-full bg-transparent-50 font-bold'
    >
      <div className='w-full h-full flex justify-center items-center '>
        <div className='w-fit bg-white-50 '>
          {customIcon ? (
            <div className='w-fit mx-auto pt-6 pb-2'>{customIcon}</div>
          ) : (
            <FcInfo className='relative mx-auto -top-8 w-[48px] text-[68px]' />
          )}

          <div className='p-5 text-center space-y-4'>
            <h2 className='lg:text-5xl md:text-3xl text-xl'>{title}</h2>
            <p className='text-[18px] max-w-[450px] capitalize font-QuickSand font-medium '>
              {message}
            </p>
          </div>
          {children}
          <button
            onClick={() => {
              setCustomModalStatus(false);
            }}
            className='text-center bg-primary-500 text-white-50 text-xl w-full py-2 hover:bg-red-500 transition-all'
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

CustomModal.propTypes = {
  CustomModalStatus: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  setCustomModalStatus: PropTypes.func,
  handleAddFieldsBtn: PropTypes.func,
  customIcon: PropTypes.any,
  children: PropTypes.node,
};

export default CustomModal;
