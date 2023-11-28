import Swal from 'sweetalert2';
import firebaseAuthError from '../../Services/Utility/FirebaseAuthError';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CreateToken from '../../api/CreateToken';
import RegisterUserInDatabase from '../../api/RegisterUserInDatabase';

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useContext(AuthContext);
  // handle google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const userData = {
          userName: user?.displayName,
          userEmail: user?.email || 'anonymoususer@gmail.com',
          userId: user?.uid,
          userRole: 'user',
        };
        const id = { userId: user?.uid };
        CreateToken(id);
        RegisterUserInDatabase(userData);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Logged In Successfully',
          text: 'Redirecting Home Page...',
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate after login
        navigate(location?.state ? location?.state : '/');
      })
      .catch((error) => {
        firebaseAuthError(error.message);
      });
  };
  return (
    <div>
      <button
        className='px-5 py-2 hover:bg-primary-600 backdrop-blur-[25px] font-medium text-[18px] hover:text-white uppercase w-full h-full cursor-pointer rounded bg-transparent border-2 hover:border-transparent text-primary-600 border-primary-600 hover:text-white-50 duration-500 flex justify-center items-center gap-3'
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className='text-[26px]' />
        Continue With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
