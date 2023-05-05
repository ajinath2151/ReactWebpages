import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { Avatar, Badge, InputBase } from "@material-ui/core";
import ajinathImg from '../images/AjinathShinde.jpg'
import { useState } from "react";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Slider from '@material-ui/core/Slider';
import '../index.css';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    minHeight:"46px"
  },
  logoLarge: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSmall: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",    
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"), //condition for show search icon and input when small screen
      width:"65%",
    },
    [theme.breakpoints.up("sm")]: {
      display: (props) => (props.open ? "none" : "flex"), //condition for show search icon and input when small screen
      width:"50%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display:"none",
    },
  },
  searchButton: {
    marginRight:theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    
    alignItems:"center",    
    display: (props) => (props.open ? "none" : "flex"), //condition for show search icon and input when small screen
    
  },
  
  avatar: {
    width: "30px",
    height: "30px",
    // margin:"0px 3px",
    marginRight:theme.spacing(2),
  },
  badges: {
    // margin:"0px 5px",
    marginRight:theme.spacing(1),
  },
}));

const Navbar = () => {
  const [open,setOpen] = useState(false);
    const classes = useStyles( {open} );     //using open passing prop to useState of open,setOpen that can use anywhere inside style elements
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLarge}>
          Ajinath Shinde
        </Typography>
        <Typography variant="h6" className={classes.logoSmall}>
          AJINATH
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badges}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badges}>
            <Notifications />
          </Badge>

          
          

          <AvatarGroup max={2} spacing={5} className={classes.AvatarGroup} >
          <Avatar alt="ajinath image" src={ajinathImg} className={classes.avatar} />
          <Avatar alt="shambhuraje image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7CkPM1h5gj-6DJqeSZ9zLk81X2U3ZauCrQ&usqp=CAU"} className={classes.avatar} />
          <Avatar alt="shambhuraje image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7CkPM1h5gj-6DJqeSZ9zLk81X2U3ZauCrQ&usqp=CAU"} className={classes.avatar} />
          <Avatar alt="shambhuraje image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7CkPM1h5gj-6DJqeSZ9zLk81X2U3ZauCrQ&usqp=CAU"} className={classes.avatar} />
          <Avatar alt="shambhuraje image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7CkPM1h5gj-6DJqeSZ9zLk81X2U3ZauCrQ&usqp=CAU"} className={classes.avatar} />
          <Avatar alt="shambhuraje image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7CkPM1h5gj-6DJqeSZ9zLk81X2U3ZauCrQ&usqp=CAU"} className={classes.avatar} />          
          </AvatarGroup>
          

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
