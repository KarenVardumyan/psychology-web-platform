import { useParams } from 'react-router-dom';
import { Grid, Paper } from "@mui/material";
import PaymentOptions from "./PaymentOptions";
import useAuth from "hooks/useAuth";

function Payment() {
  const { psychologistId } = useParams();
  const { user: currentUser } = useAuth();

  return (
    <Grid height="100vh" display="flex" alignItems="center" justifyContent="center">
      <PaymentOptions psychologistId={psychologistId} currentUser={currentUser}/>
    </Grid>
  )
};

export default Payment;
