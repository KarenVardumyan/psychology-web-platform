
import {
  Yoga,
  Home,
  Tests,
  Sounds,
  Motivation,
} from 'components/pages';

const routeObjects = [
  {
    index: true,
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