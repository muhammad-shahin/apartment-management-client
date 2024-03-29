import { createContext, useEffect, useState } from 'react';
import { auth } from '../Configs/firebase.config';
import PropTypes from 'prop-types';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const secureAxios = useAxios();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  // email & password sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login function
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out function
  const logoutUser = async () => {
    return signOut(auth)
      .then(() => {
        secureAxios
          .post('/logout')
          .then((res) => {
            console.log('Logout success response: ', res.data);
            localStorage.removeItem('access-token');
            localStorage.removeItem('userData');
            localStorage.removeItem('registeredUser');
          })
          .catch((error) => {
            console.log('Logout error response : ', error.response);
          });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Successfully Logout',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Failed To Logout. Please Try Again. ${error.message}`,
          showConfirmButton: false,
          timer: 3500,
        });
      });
  };

  // onAuth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      localStorage.setItem('userData', JSON.stringify(currentUser));
      setUser(currentUser);
      setLoading(false);
      if (!currentUser) {
        localStorage.setItem('userData', null);
      }
    });
    return () => {
      unSubscribe();
    };
  }, [secureAxios]);

  // toggle profile on click
  const [showProfile, setShowProfile] = useState(false);

  const authInfo = {
    createUser,
    loginUser,
    signInWithGoogle,
    user,
    logoutUser,
    showProfile,
    setShowProfile,
    loading,
    setLoading,
    isSticky,
    setIsSticky,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
