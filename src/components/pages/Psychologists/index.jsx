import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  Skeleton,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import PaidIcon from "@mui/icons-material/Paid";
import StarIcon from "@mui/icons-material/Star";
import CommentIcon from "@mui/icons-material/Comment";
import GradeIcon from "@mui/icons-material/Grade";
import useUsersList from "hooks/useUsersList";
import useSelectChat from "hooks/useSelectChat";
import noImage from "assets/img/no-Image-Placeholder.svg.png";
import CommentsDialog from "./Comments";
import { useEffect } from "react";

const usersCategories = {
  "Ընդհանուր": "commonPsychologist",
  "Զինվորական": "soldersPsychologist",
  "Մանկական" : "childPsychologist",
  "Ընտանեկան": "familyPsychologist"
};

function Psychologists() {
  const navigate = useNavigate();
  const { currentUser, handleSelect } = useSelectChat();
  const [openCommentsDialog, setOpenCommentsDialog] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState(null);
  const { users, updateUser } = useUsersList(currentUser);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredUsers, setFilteredUsers] = useState();
  const handleClickOpen = (userData) => {
    setOpenCommentsDialog(true);
    setSelectedUserData(userData);
  };

  const handleClose = () => {
    setOpenCommentsDialog(false);
  };

  const handleSendMassage = (userInfo) => {
    if (
      currentUser?.role === "psychologist" ||
      currentUser?.role === "solder" ||
      currentUser?.payments?.[userInfo.uid]
    ) {
      return navigate(`/chat/${userInfo.uid}`);
    } else {
      navigate(`/payment/${userInfo.uid}`);
    }
  };

  const handleFilter = (event) => {
    const { value } = event.target;
    if(value && filteredUsers) {
      const filteredData = [...users]?.filter((user) => user.category === usersCategories[value]);
      setSelectedCategory(value);
      setFilteredUsers(filteredData);
    }
  };

  useEffect(() => {
    if(users) {
      setFilteredUsers([...users])
    }
  },[users])

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
          selectedUserData={selectedUserData}
        />
        {currentUser && (
          <h2
            id="kap"
            style={{
              transition: "transform 0.3s ease",
              boxShadow: "0.3s ease",
            }}
          >
            {currentUser?.role === "psychologist"
              ? "Մեր պացիենտները"
              : "Մեր հոգեբանները"}
          </h2>
        )}
      </Grid>
      {currentUser && currentUser?.role !== "psychologist"  && filteredUsers && (
        <Grid container xs={12} sx={{ padding: "0 54px" }}>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120, width: "200px" }}>
            <InputLabel id="demo-simple-select-filled-label">Ֆիլտր ըստ կատեգօրիաների</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={selectedCategory}
              onChange={handleFilter}
            >
              <MenuItem value="Ընդհանուր" sx={{width: "inherit"}}>Ընդհանուր</MenuItem>
              <MenuItem value="Զինվորական" sx={{width: "inherit"}}>Զինվորական</MenuItem>
              <MenuItem value="Մանկական" sx={{width: "inherit"}}>Մանկական</MenuItem>
              <MenuItem value="Ընտանեկան" sx={{width: "inherit"}}>Ընտանեկան</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      )}
      {currentUser && filteredUsers ? (
        <Grid container direction="row" spacing={2} padding={8}>
          {filteredUsers?.map((userInfo) => {
            const {
              displayName,
              surname,
              email,
              photoURL,
              uid,
              rating = 0,
              description,
              category
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
                    <Typography variant="subtitle1" minHeight={20}>
                      {displayName} {surname}
                    </Typography>
                    {userInfo?.role === "psychologist" && (
                      <Typography variant="subtitle1" minHeight={20}>
                        կատեգորիա: {category}
                      </Typography>
                    )}
                    <Typography
                      variant="subtitle1"
                      minHeight={60}
                      maxHeight={60}
                      overflow="auto"
                      maxWidth="100%"
                      sx={{
                        wordBreak: 'break-all',
                        whiteSpace: 'normal'
                      }}
                    >
                      Նկարագիր։ {description}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ padding: "8px 16px" }}>
                    <Grid display="flex" width="100%" alignItems="center">
                      <Grid container item xs={6}>
                        <IconButton
                          sx={{ "&:focus": { outline: "unset" } }}
                          onClick={() => handleClickOpen(userInfo)}
                        >
                          <CommentIcon
                            sx={{ height: "20px", width: "20px" }}
                            color="primary"
                            cursor="pointer"
                          />
                        </IconButton>
                        <IconButton
                          sx={{ "&:focus": { outline: "unset" } }}
                          onClick={() => {
                            handleSendMassage(userInfo);
                          }}
                        >
                          {/* <Link to="/chat"> */}
                          <SendIcon
                            sx={{ height: "20px", width: "20px" }}
                            color="primary"
                            cursor="pointer"
                          />
                          {/* </Link> */}
                        </IconButton>
                        <Grid sx={{ paddingY: "8px" }}>
                          <PaidIcon
                            sx={{ height: "20px", width: "20px" }}
                            color={
                              currentUser?.payments?.[userInfo.uid]
                                ? "success"
                                : "disabled"
                            }
                          />
                          {/* </Link> */}
                        </Grid>
                      </Grid>
                      <Grid item xs={6} display="flex" justifyContent="end">
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "5px",
                          }}
                        >
                          {rating && (rating[currentUser.uid] || 0)} /
                          {ratingValue !== 0 && ratingValue
                            ? ratingValue.toFixed(2)
                            : "no rating"}
                        </span>
                        <Rating
                          name="half-rating"
                          defaultValue={ratingValue.toFixed(2)}
                          value={ratingValue.toFixed(2)}
                          precision={0.5}
                          size="large"
                          onChange={(_, newValue) => {
                            const newRating = rating ? { ...rating } : {};
                            if (newValue === null) {
                              delete newRating[currentUser.uid];
                            } else {
                              newRating[currentUser.uid] = newValue;
                            }
                            updateUser(uid, {
                              rating: newRating,
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
        <Grid container direction="row" spacing={2} padding={8}>
          {!Boolean(filteredUsers?.length) &&
            Array(6)
              .fill()
              .map((index) => {
                return (
                  <Grid item md={6} sm={12} lg={4} key={index}>
                    <Skeleton
                      variant="rectangular"
                      width={345}
                      height={300}
                      key={index}
                    />
                  </Grid>
                );
              })}
        </Grid>
      )}
    </Grid>
  );
}

export default Psychologists;
