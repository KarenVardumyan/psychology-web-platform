import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(props) {
  const { ref } = props;
  return <Slide direction="up" ref={ref} {...props} />;
});

function CommentsDialog(props) {
  const { open, handleClose } = props;

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: 'relative',
            height: "70px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#ffcbca",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .2)"
          }}
        >
          <Toolbar>
            <Grid container>
              <Grid
                item
                height={30}
                display="flex"
                alignItems="center"
                justifyContent="end"
                xs={12}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                  sx={{ width: "min-content", "&:focus": { outline: "unset" } }}
                >
                  <CloseIcon sx={{ height: "30px", width: "30px" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid>
          <Typography>No comments</Typography>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}

export default CommentsDialog;
