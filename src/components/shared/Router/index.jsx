import { Routes } from 'react-router-dom';

import routeObjects from './routes';
import RenderRoutes from './RenderRoutes';

function Router() {
  return (
    <Routes>{RenderRoutes(routeObjects)}</Routes>
  );
}

export { routeObjects };

export default Router;
