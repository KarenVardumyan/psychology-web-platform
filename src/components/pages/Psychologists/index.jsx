import { useState } from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
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
  IconButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import CommentIcon from '@mui/icons-material/Comment';
import GradeIcon from '@mui/icons-material/Grade';
import useUsersList from "hooks/useUsersList";
import useSelectChat from "hooks/useSelectChat";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import noImage from 'assets/img/no-Image-Placeholder.svg.png'

function Psychologists() {
  const { currentUser, handleSelect } = useSelectChat();

  const { users } = useUsersList(currentUser);
  // const { text, handleSend, setText } = useSendMessage();
  // const { chats, handleSelectChat } = useChats();
  // const { messages } = useMessages();

  const [value, setValue] = useState(2.5);
  // console.log('*******users*******          ', users)
  return (
    <Grid sx={{backgroundColor: "pink", height: "100vh", maxHeight: "100vh", overflow: "auto"}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
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
          {users.length && (
            users.map((userInfo) => {
              const { displayName, surname, email, photoURL, uid } = userInfo
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
                      />) : (
                      <img src={noImage} alt="Contact Us" style={{height: "200px", width: "inherit" }} />
                    )}

                    <CardContent>
                      <div>{displayName} {surname}</div>
                    </CardContent>

                    <CardActions sx={{ padding: "8px 16px" }}>
                      <Grid
                        display="flex"
                        width="100%"
                        alignItems="center"
                      // justifyContent="space-between"
                      >
                        <Grid container item xs={6}>
                          <IconButton sx={{ "&:focus": { outline: "unset" } }}>
                            <CommentIcon sx={{ height: "20px", width: "20px" }} color="primary" cursor="pointer" />
                          </IconButton>
                          <IconButton sx={{ "&:focus": { outline: "unset" } }}>
                            <GradeIcon sx={{ height: "20px", width: "20px" }} color="primary" cursor="pointer" />
                          </IconButton>
                          <IconButton sx={{ "&:focus": { outline: "unset" } }}>
                            <Link to='/chat' target="_blank" >
                              <SendIcon sx={{ height: "20px", width: "20px" }} color="primary" cursor="pointer" />
                            </Link>
                          </IconButton>
                        </Grid>
                        <Grid item xs={6} display="flex" justifyContent="end">
                          <Rating
                            name="half-rating"
                            defaultValue={2.5}
                            value={value}
                            precision={0.5}
                            readOnly
                            size="large"
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          )}
          {!users.length && (
            <div>Load users....</div>
          )}
        </Grid>

      ) : (
        <div>Loading...</div>
      )}
    </Grid >
  )
};

export default Psychologists;
