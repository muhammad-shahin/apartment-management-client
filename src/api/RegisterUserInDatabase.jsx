import publicAxios from './publicAxios';

const RegisterUserInDatabase = (userData) => {
  publicAxios
    .post('/users', userData)
    .then((res) => {
      console.log('Register user in Database success :', res.data);
    })
    .catch((error) => {
      console.log('Register user in Database error :', error);
    });
};

export default RegisterUserInDatabase;
