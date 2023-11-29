import Root from '../Layouts/Root/Root';
import Apartments from '../Pages/Apartments/Apartments';
import Announcements from '../Pages/Dashboard/Announcements/Announcements';
import Checkout from '../Pages/Dashboard/Checkout/Checkout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MakePayment from '../Pages/Dashboard/MakePayment/MakePayment';
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
            path: '/dashboard',
            element: <Profile />,
          },
          {
            path: '/dashboard/profile',
            element: <Profile />,
          },
          {
            path: '/dashboard/announcements',
            element: <Announcements />,
          },
          {
            path: '/dashboard/payment',
            element: <MakePayment />,
          },
          {
            path: '/dashboard/checkout',
            element: <Checkout />,
          },
        ],
      },
    ],
  },
];

export default routes;
