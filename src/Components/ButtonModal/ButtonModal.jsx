import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FcInfo } from 'react-icons/fc';

const ButtonModal = ({
  buttonModalStatus,
  title,
  message,
  setButtonModalStatus,
  handleAddFieldsBtn,
}) => {
  const buttonModal = useRef(null);

  useEffect(() => {
    if (buttonModalStatus) {
      buttonModal.current.showModal();
    } else {
      buttonModal.current.close();
    }
  }, [buttonModalStatus]);

  return (
    <dialog
      open
      id='buttonmodal'
      ref={buttonModal}
      className='sticky top-0 left-0 w-full h-full bg-transparent'
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit bg-white-50 rounded-lg'>
          <FcInfo className='relative mx-auto -top-8 w-[48px] text-[68px]' />
          <div className='p-5 text-center space-y-4'>
            <h2 className='text-3xl'>{title}</h2>
            <p className='font-normal text-[18px] max-w-[350px] capitalize'>
              {message}
            </p>
          </div>
          <button
            onClick={() => {
              setButtonModalStatus(false);
            }}
            className='text-center bg-sky-600 text-white-50 text-xl w-full py-2 hover:bg-rose-500 transition-all rounded-b-lg'
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

ButtonModal.propTypes = {
  buttonModalStatus: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  setButtonModalStatus: PropTypes.func.isRequired,
  handleAddFieldsBtn: PropTypes.func.isRequired,
};

export default ButtonModal;
