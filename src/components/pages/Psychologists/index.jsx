import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  Rating,
  Grid,
  IconButton,
  Skeleton
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import GradeIcon from "@mui/icons-material/Grade";
import useUsersList from "hooks/useUsersList";
import useSelectChat from "hooks/useSelectChat";
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

  return (
    <Grid
      sx={{
        backgroundColor: "rgb(248, 229, 242)",
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
        {currentUser && (<h2 id="kap" style={{ transition: 'transform 0.3s ease', boxShadow: '0.3s ease' }}>
          {currentUser?.role === "psychologist" ? 'Մեր հոգեբանները' : 'Մեր պացիենտներիը'}
        </h2>)}
      </Grid>
      {currentUser && users && Boolean(users.length) ? (
        <Grid
          container
          direction="row"
          spacing={2}
          padding={8}
        >
          {users.map((userInfo) => {
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
                          {ratingValue !== 0 && ratingValue ? ratingValue.toFixed(2) : "no rating"}
                        </span>
                        <Rating
                          name="half-rating"
                          defaultValue={ratingValue.toFixed(2)}
                          value={ratingValue.toFixed(2)}
                          precision={0.5}
                          size="large"
                          onChange={(_, newValue) => {
                            const newRating = rating ? {...rating} : {};
                            if(newValue === null) {
                              delete newRating[currentUser.uid];
                            } else {
                              newRating[currentUser.uid] = newValue;
                            }
                            updateUser(uid, {
                              rating: newRating
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
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          spacing={2}
          padding={8}
        >
          {!Boolean(users.length) && Array(6).fill().map((index) => {
            return (
              <Grid item md={6} sm={12} lg={4} key={index}>
                <Skeleton variant="rectangular" width={345} height={300} key={index} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </Grid>
  );
}

export default Psychologists;
