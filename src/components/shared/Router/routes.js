
import {
  Yoga,
  Home,
  Tests,
  Sounds,
  Motivation,
} from 'components/pages';
import { Navigate } from 'react-router-dom';

const routeObjects = [
  {
    index: true,
    element: <Navigate to='home' />
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'tests',
    element: <Tests />
  },
  {
    path: 'motivation',
    children: [
      {
        index: true,
        element: <Motivation />,
      },
      {
        path: 'sounds',
        element: <Sounds />
      },
      {
        path: 'yoga',
        element: <Yoga />
      }
    ]
  }
]

export default routeObjects;