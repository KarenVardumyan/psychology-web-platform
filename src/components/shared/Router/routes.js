
import {
  Yoga,
  Home,
  Tests,
  Sounds,
  Motivation,
  SignIn,
  SignUp,
  Chat,
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
    path: 'chat/:uid',
    element: <PrivateRoute><Chat /></PrivateRoute>,
    isPrivateRoute: true
  },
  // {
  //   path: 'motivation',
  //   isPrivateRoute: true,
  //   children: [
  //     {
  //       index: true,
  //       element: <Motivation />,
  //       isPrivateRoute: true
  //     },
  //     {
  //       path: 'sounds',
  //       element: <Sounds />,
  //       isPrivateRoute: true
  //     },
  //     {
  //       path: 'yoga',
  //       element: <Yoga />,
  //       isPrivateRoute: true
  //     }
  //   ]
  // }
]

export default routeObjects;