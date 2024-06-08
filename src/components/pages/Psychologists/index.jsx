import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Paper,
  Rating,
  Grid,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import GradeIcon from "@mui/icons-material/Grade";
import useUsersList from "hooks/useUsersList";
import useSelectChat from "hooks/useSelectChat";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import noImage from "assets/img/no-Image-Placeholder.svg.png";
import CommentsDialog from "./Comments";

function Psychologists() {
  const { currentUser, handleSelect } = useSelectChat();
  const [openCommentsDialog, setOpenCommentsDialog] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState(null);

  const handleClickOpen = (userData) => {
    setOpenCommentsDialog(true);
    setSelectedUserData(userData);
  };

  const handleClose = () => {
    setOpenCommentsDialog(false);
  };

  const { users, updateUser } = useUsersList(currentUser);
  // const { text, handleSend, setText } = useSendMessage();
  // const { chats, handleSelectChat } = useChats();
  // const { messages } = useMessages();
  return (
    <Grid
      sx={{
        backgroundColor: "pink",
        height: "100vh",
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        <CommentsDialog
          open={openCommentsDialog}
          handleClose={handleClose}
          userData={selectedUserData}
        />
        <Typography variant="h2" component="h2">
          Մեր հոգեբանները
        </Typography>
      </Grid>
      {currentUser && users ? (
        <Grid
          container
          direction="row"
          // justifyContent="center"
          // alignItems="center"
          spacing={2}
          padding={8}
        >
          {users.length &&
            users.map((userInfo) => {
              const {
                displayName,
                surname,
                email,
                photoURL,
                uid,
                rating = 0,
              } = userInfo;
              const ratingValue = rating
                ? Object.values(rating).reduce((a, b) => a + b, 0) /
                Object.keys(rating).length
                : 0;
              return (
                <Grid item md={6} sm={12} lg={4}>
                  <Card sx={{ maxWidth: 345, width: 345 }}>
                    {photoURL ? (
                      <CardMedia
                        component="img"
                        height="200"
                        image={photoURL}
                        alt="strategicpsychology"
                        key={email}
                      />
                    ) : (
                      <img
                        src={noImage}
                        alt="Contact Us"
                        style={{ height: "200px", width: "inherit" }}
                      />
                    )}

                    <CardContent>
                      <Typography variant="subtitle1">
                        {displayName} {surname}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ padding: "8px 16px" }}>
                      <Grid
                        display="flex"
                        width="100%"
                        alignItems="center"
                      >
                        <Grid container item xs={6}>
                          <IconButton
                            sx={{ "&:focus": { outline: "unset" } }}
                            onClick={() => handleClickOpen(uid)}
                          >
                            <CommentIcon
                              sx={{ height: "20px", width: "20px" }}
                              color="primary"
                              cursor="pointer"
                            />
                          </IconButton>
                          <IconButton sx={{ "&:focus": { outline: "unset" } }}>
                            <Link to="/chat" target="_blank">
                              <SendIcon
                                sx={{ height: "20px", width: "20px" }}
                                color="primary"
                                cursor="pointer"
                              />
                            </Link>
                          </IconButton>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="end">
                          <span style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                            {rating && (rating[currentUser.uid] || 0)} /
                            {ratingValue !== 0 ? ratingValue.toFixed(2) : "no rating"}
                          </span>
                          <Rating
                            name="half-rating"
                            defaultValue={ratingValue.toFixed(2)}
                            value={ratingValue.toFixed(2)}
                            precision={0.5}
                            size="large"
                            onChange={(event, newValue) => {
                              console.log(userInfo);
                              updateUser(uid, {
                                rating: {
                                  ...rating,
                                  [currentUser.uid]: newValue,
                                },
                              });
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          {!users.length && <div>Load users....</div>}
        </Grid>
      ) : (
        <div>Loading...</div>
      )}
    </Grid>
  );
}

export default Psychologists;
