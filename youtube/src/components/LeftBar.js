import { Container, Typography, makeStyles } from "@material-ui/core";
import { CameraAlt, Home, Person, PlayCircleFilled, List, Bookmark, Storefront, Settings, ExitToApp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    height:"100vh",
    color:"white",
    marginTop:theme.spacing(8),
    backgroundColor:theme.palette.primary.main,
    position:"sticky",
    top:65,
    [theme.breakpoints.up("sm")]: {
      backgroundColor:"white",
      color:"#555",
      border:"2px solid #cbc6c6",
      
    },
  },
  item: {
    display:"flex",
    alignItems:"center",
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom:theme.spacing(3),
      cursor:"Pointer",
    },
  },
  icon:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize:"18px"
    }
  },
  text: {
    fontWeight:500,
    [theme.breakpoints.down("sm")] : {
      display:"none",
    },
  },
}));

const LeftBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>      
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAlt className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleFilled className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;
