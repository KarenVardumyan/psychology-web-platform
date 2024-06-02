import { Routes, Route } from 'react-router-dom';
import routeObjects from './routes'

function Router() {
  return (
    <Routes>
      {routeObjects.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default Router;
