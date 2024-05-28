
import { Home, Tests, Motivation, Sounds } from 'components/pages';

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
        path: 'Sounds',
        element: <Sounds />
      }
    ]
  }
]

export default routeObjects;