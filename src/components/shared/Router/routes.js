
import {
  Yoga,
  Home,
  Tests,
  Sounds,
  Motivation,
  SignIn,
  SignUp,
  Chat,
  Books,
  Pictures,
  Psychologists,
  AboutAs,
  Payment
} from 'components/pages';
import { Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const routeObjects = [
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '*',
    element: <>Not Found!! 404</>,
    isPrivateRoute: true
  },
  {
    path: '/',
    element: <PrivateRoute><Home /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'home',
    element: <PrivateRoute><Home /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'tests',
    element: <PrivateRoute><Tests /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'chat/:selectedUserUid',
    element: <PrivateRoute><Chat /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'motivation',
    index: true,
    element: <PrivateRoute><Motivation />,</PrivateRoute>,
    isPrivateRoute: true,
  },
  {
    path: 'motivation/sounds',
    element: <PrivateRoute><Sounds /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'motivation/yoga',
    element: <PrivateRoute><Yoga /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'motivation/books',
    element: <PrivateRoute><Books /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'motivation/pictures',
    element: <PrivateRoute><Pictures /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'psychologists',
    element: <PrivateRoute><Psychologists /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'about-as',
    element: <PrivateRoute><AboutAs /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'payment/:psychologistId',
    element: <PrivateRoute><Payment /></PrivateRoute>,
    isPrivateRoute: true
  }
]

export default routeObjects;