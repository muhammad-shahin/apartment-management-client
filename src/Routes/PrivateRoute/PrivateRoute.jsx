import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  } else if (loading) {
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
  } else {
    Swal.fire({
      position: 'center',
      icon: 'info',
      title: 'You Have to Login To Access This Page',
      showConfirmButton: false,
      timer: 2500,
    });
    return (
      <Navigate
        state={location.pathname}
        to='/login'
      />
    );
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
