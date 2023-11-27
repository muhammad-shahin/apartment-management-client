import Root from '../Layouts/Root/Root';
import Apartments from '../Pages/Apartments/Apartments';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Pages/Dashboard/Profile/Profile';
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
        children: [
          {
            path: '/dashboard/profile',
            element: <Profile />,
          },
          {
            path: '/dashboard/my-agreements',
            element: <Profile />,
          },
        ],
      },
    ],
  },
];

export default routes;
