import { Avatar, Container, Typography, makeStyles } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup/AvatarGroup";


const useStyles = makeStyles((theme)=>(({
  container: {
    marginTop:theme.spacing(8),
    position:"sticky",
    top:65,
  },
  title: {
    fontSize:16,
    fontWeight:500,
    color:"#555",

  }
})));

const RightBar = () => {

  const classes = useStyles();
  return (
    <Container className={classes.container}>      
        <Typography className={classes.title} gutterBottom>Online Friends</Typography>
        <AvatarGroup max={6}>
        <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://v4.mui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/8.jpg" />
      </AvatarGroup>
    </Container>
  );
};

export default RightBar;
