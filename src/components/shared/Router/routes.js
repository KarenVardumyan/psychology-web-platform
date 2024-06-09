
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
  AboutAs
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
    path: 'chat',
    element: <PrivateRoute><Chat /></PrivateRoute>,
    isPrivateRoute: true
  },
  {
    path: 'motivation',
    index: true,
    element: <Motivation />,
    isPrivateRoute: true,
  },
  {
    path: 'motivation/sounds',
    element: <Sounds />,
    isPrivateRoute: true
  },
  {
    path: 'motivation/yoga',
    element: <Yoga />,
    isPrivateRoute: true
  },
  {
    path: 'motivation/books',
    element: <Books />,
    isPrivateRoute: true
  },
  {
    path: 'motivation/pictures',
    element: <Pictures />,
    isPrivateRoute: true
  },
  {
    path: 'psychologists',
    element: <Psychologists />,
    isPrivateRoute: true
  },
  {
    path: 'about-as',
    element: <AboutAs />,
    isPrivateRoute: true
  }
]

export default routeObjects;