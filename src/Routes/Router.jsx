import Root from '../Layouts/Root/Root';
import Apartments from '../Pages/Apartments/Apartments';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const routes = [
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/apartments',
        element: <Apartments />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
];

export default routes;
