import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { CircularProgress, Grid} from '@mui/material';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return (
    <Grid
      height="100vh"
      width="inherit"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <CircularProgress sx={{color: "pink"}}/>
      </Grid>
    </Grid>
  );

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
