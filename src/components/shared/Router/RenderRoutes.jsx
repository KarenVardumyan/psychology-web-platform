import { Route } from 'react-router-dom';

function RenderRoutes(routeObjects) {
  return (
    routeObjects.map((routeObject) => {
      const {
        path,
        index,
        element,
        children,
      } = routeObject;

      return (
        <Route key={`${path + String(index)}`} index={index} path={path} element={element}>
          {children && RenderRoutes(children)}
        </Route>
      );
    })
  );
}

export default RenderRoutes;
