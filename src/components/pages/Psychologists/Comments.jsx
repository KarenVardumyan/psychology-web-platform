import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Grid, Avatar } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import useSelectComments from "hooks/useSelectComments";
import useAuth from "hooks/useAuth";
import { db } from "config/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";

// Function to convert Firebase Timestamp to yyyy-mm-dd hh:mm:ss format
function formatDate(firebaseTimestamp) {
  // Convert Firebase Timestamp to JavaScript Date object
  const date = firebaseTimestamp.toDate();

  // Function to add leading zero if needed
  const pad = (num) => (num < 10 ? "0" : "") + num;

  // Extract components
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are zero-based
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  // Format the date string
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CommentsDialog(props) {
  const { open, handleClose, selectedUserData } = props;
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useAuth();
  console.log(selectedUserData);
  // const { handleSelect } = useSelectComments(uid);
  // handleSelect();
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, "comments"), {
          text: comment,
          uid: user.uid,
          email: user.email,
          timestamp: serverTimestamp(),
          name: user.displayName,
          surname: user?.surname || "",
          photoURL: user?.photoURL || "",
          to: selectedUserData.uid,
        });
        setComment("");
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  useEffect(() => {
    if (selectedUserData) {
      const q = query(
        collection(db, "comments"),
        where("to", "==", selectedUserData.uid),
        orderBy("timestamp", "desc")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const commentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsData);
      });

      return () => unsubscribe();
    }
  }, [selectedUserData]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          ".MuiDialog-paper": {
            height: "400px",
            minHeight: "400px",
            width: "400px",
            minWidth: "400px",
            overflow: "hidden",
          },
        }}
      >
        <AppBar
          sx={{
            position: "relative",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#ffcbca",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .2)",
            padding: 0,
          }}
        >
          <Grid>
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
          </Grid>
        </AppBar>
        <Grid
          sx={{ maxHeight: "230px", minHeight: "230px", overflow: "auto" }}
          padding={2}
        >
          <p
            id="kap"
            style={{
              transition: "transform 0.3s ease",
              boxShadow: "0.3s ease",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            Մեկնաբանություններ
          </p>
          <React.Fragment>
            {/* sx={{ backgroundColor: "red" }} */}
            {comments.map((comment) => (
              <Grid key={comment.id} mb={1}>
                <Grid item container>
                  <Grid item xs={1}>
                    {comment.photoURL ? (
                      <Avatar
                        alt="user photo"
                        src={comment.photoURL}
                        sx={{ width: 25, height: 25 }}
                      />
                    ) : (
                      <Avatar
                        {...stringAvatar(`${comment.name} ${comment.surname}`)}
                        sx={{ width: 25, height: 25 }}
                      />
                    )}
                  </Grid>
                  <Grid item>
                    <Typography>
                      {comment.name} {comment.surname}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item sx={{ background: "lightgray" }}>
                  <Typography ml={2}>{comment.text}</Typography>
                </Grid>
                <Typography textAlign="end">
                  {comment?.timestamp ? formatDate(comment.timestamp) : ""}
                </Typography>
              </Grid>
            ))}
          </React.Fragment>
        </Grid>
        <Grid padding={2}>
          <p
            id="comment-input-label"
            style={{
              color: "pink",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              // margin-bottom: 8vh;
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transition: "transform 0.3s ease, color 0.3s ease",
              transition: "color 0.3s ease",
              fontSize: "9vh",
              transition: "transform 0.3s ease",
              boxShadow: "0.3s ease",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            Թողնել մեկնաբանություն
          </p>
          <form onSubmit={handleCommentSubmit}>
            <div id="message-form-container">
              <input
                id="message-input"
                style={{ border: "solid 2px pink" }}
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button disabled={!comment} id="message-btn" type="submit">
                Ուղարկել
              </button>
            </div>
          </form>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}

export default CommentsDialog;
