import React, { useEffect, useState } from 'react';

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
import useSelectComments from "hooks/useSelectComments";
import useAuth from "hooks/useAuth";
import { db } from 'config/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CommentsDialog(props) {
  const { open, handleClose, selectedUserData } = props;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const uid = selectedUserData?.uid || null;
  const { user } = useAuth();

  // const { handleSelect } = useSelectComments(uid);
  // handleSelect();
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, 'comments'), {
          text: comment,
          uid: user.uid,
          email: user.email,
          timestamp: serverTimestamp(),
        });
        setComment('');
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    });

    return () => unsubscribe();
  }, []);

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
          {/* <Typography>No comments</Typography> */}
          <div>
            <h2>Comments</h2>
            {comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.text}</p>
                <small>{comment.email}</small>
              </div>
            ))}
          </div>
        </Grid>
        <Grid>
          <form onSubmit={handleCommentSubmit}>
            <h2>Leave a Comment</h2>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Your comment"
            />
            <button type="submit" disabled={!user}>
              Submit
            </button>
          </form>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}

export default CommentsDialog;
