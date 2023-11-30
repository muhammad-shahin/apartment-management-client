import Root from '../Layouts/Root/Root';
import Apartments from '../Pages/Apartments/Apartments';
import AgreementRequest from '../Pages/Dashboard/AgreementRequest/AgreementRequest';
import Announcements from '../Pages/Dashboard/Announcements/Announcements';
import Checkout from '../Pages/Dashboard/Checkout/Checkout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MakeAnnouncement from '../Pages/Dashboard/MakeAnnouncement/MakeAnnouncement';
import MakePayment from '../Pages/Dashboard/MakePayment/MakePayment';
import ManageMember from '../Pages/Dashboard/ManageMember/ManageMember';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import Profile from '../Pages/Dashboard/Profile/Profile';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: '/dashboard',
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/profile',
            element: (
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/announcements',
            element: (
              <PrivateRoute>
                <Announcements />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/payment',
            element: (
              <PrivateRoute>
                <MakePayment />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/checkout',
            element: (
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/payment-history',
            element: (
              <PrivateRoute>
                <PaymentHistory />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/manage-members',
            element: (
              <PrivateRoute>
                <ManageMember />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/make-announcement',
            element: (
              <PrivateRoute>
                <MakeAnnouncement />
              </PrivateRoute>
            ),
          },
          {
            path: '/dashboard/agreement-requests',
            element: (
              <PrivateRoute>
                <AgreementRequest />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
];

export default routes;
