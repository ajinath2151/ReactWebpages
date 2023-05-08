import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    position: "sticky",
    top: 65,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
    marginBottom:10,
  },
  avatarGroup: {
    marginBottom: 20,
  },
  link: {
    marginRight:theme.spacing(2),
    fontSize:16,
  },
  category: {
    marginTop:20,
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} className={classes.avatarGroup}>
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={120} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/hats.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/star.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/bike.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/honey.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.category} gutterBottom>
        Category
      </Typography>
      <Link href="#" className={classes.link} variant="body2" onClick="">
        Sports
      </Link>
      <Link href="#" className={classes.link} variant="body2" onClick="">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2" onClick="">
        Food
      </Link>
      <Divider flexItem style={{marginBottom:10}} />      
      <Link href="#" className={classes.link} variant="body2" onClick="">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2" onClick="">
        Technology
      </Link>
      <Link href="#" className={classes.link} variant="body2" onClick="">
        Creative
      </Link>
    </Container>
  );
};

export default RightBar;
