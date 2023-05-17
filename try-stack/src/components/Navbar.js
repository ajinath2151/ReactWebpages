import { Button, Menu, MenuItem, Typography } from "@material-ui/core";
import React, { useState } from "react";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import GirlWithBagImg from "../images/background/GirlWithBag.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${GirlWithBagImg})`,
    backgroundSize: "cover",
    // width:"100%",
    // height:"50%",
    backgroundRepeat: "no-repeat",
    height: 570,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.up("sm")]: {
      marginTop:"-68px",
    },
  },

  menuButtonHome: {
    marginTop: 30,
    color: "#c7c3c3",
    // marginLeft:200,
    "&:hover": {
      // backgroundColor: "red",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButtonPage: {
    marginTop: 30,
    color: "#c7c3c3",
    "&:hover": {
      // backgroundColor: "red",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menu: {
    marginTop: 60,
  },
  stackText: {
    marginTop: theme.spacing(3),
    color: "white",    
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      // marginRight: 220,
      marginTop: theme.spacing(1),
      color: "black",
    },
  },
  appBarDiv: {
    // marginTop: theme.spacing(3),
  },
  tryBuilder: {
    color: "white",    
    borderColor: "white",
    borderRadius: "05px",
    marginTop:"20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buyNow: {
    backgroundColor: "blue",
    color: "white",
    marginLeft: theme.spacing(2),
    borderRadius: "5px",
    marginRight: theme.spacing(10),
    marginTop:"20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIcon: {
    color: "white",
    display:"none",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      marginRight: 10,
      color: "black",
      display:"block",
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      display:"flex",
      justifyContent:"space-around"
    },
    [theme.breakpoints.down("sm")]: {
      // marginTop: theme.spacing(6),
    },
  },
  smallNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0px 12px",
  },
}));

function Navbar() {
  const classes = useStyles();

  const [homeAnchorEl, setHomeAnchorEl] = useState(null);
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);

  const handleHomeClick = (event) => {
    setHomeAnchorEl(event.currentTarget);
  };

  const handleHomeClose = () => {
    setHomeAnchorEl(null);
  };

  const handlePagesClick = (event) => {
    setPagesAnchorEl(event.currentTarget);
  };

  const handlePagesClose = () => {
    setPagesAnchorEl(null);
  };

  return (
    <>
      <div className={classes.appBar}>
        <div>
          <Button
            aria-controls="home"
            aria-haspopup="true"
            onClick={handleHomeClick}
            className={classes.menuButtonHome}
            size="small"
          >
            Home
            <KeyboardArrowDown />
          </Button>

          <Menu
            id="home"
            anchorEl={homeAnchorEl}
            keepMounted
            open={Boolean(homeAnchorEl)}
            onClose={handleHomeClose}
            className={classes.menu}
          >
            {/* appbar menu item inside          */}
            <MenuItem onClick={handleHomeClose}>Profile</MenuItem>
            <MenuItem onClick={handleHomeClose}>My Account</MenuItem>
            <MenuItem onClick={handleHomeClose}>Logout</MenuItem>
          </Menu>

          <Button
            aria-controls="pages"
            aria-haspopup="true"
            onClick={handlePagesClick}
            className={classes.menuButtonPage}
            size="small"
          >
            Pages
            <KeyboardArrowDown />
          </Button>

          <Menu
            id="pages"
            anchorEl={pagesAnchorEl}
            keepMounted
            open={Boolean(pagesAnchorEl)}
            onClose={handlePagesClose}
            className={classes.menu}
          >
            {/* appbar menu item inside          */}
            <MenuItem onClick={handlePagesClose}>Page 1</MenuItem>
            <MenuItem onClick={handlePagesClose}>Page 2</MenuItem>
            <MenuItem onClick={handlePagesClose}>Page 3</MenuItem>
          </Menu>
          <Button
            aria-controls="pages"
            aria-haspopup="true"
            onClick={handlePagesClick}
            className={classes.menuButtonPage}
            size="small"
          >
            Blocks
            <KeyboardArrowDown />
          </Button>

          <Menu
            id="pages"
            anchorEl={pagesAnchorEl}
            keepMounted
            open={Boolean(pagesAnchorEl)}
            onClose={handlePagesClose}
            className={classes.menu}
          >
            {/* appbar menu item inside          */}
            <MenuItem onClick={handlePagesClose}>Page 1</MenuItem>
            <MenuItem onClick={handlePagesClose}>Page 2</MenuItem>
            <MenuItem onClick={handlePagesClose}>Page 3</MenuItem>
          </Menu>
          <Button
            aria-controls="pages"
            aria-haspopup="true"
            onClick={handlePagesClick}
            className={classes.menuButtonPage}
            size="small"
          >
            Elements
            <KeyboardArrowDown />
          </Button>

          <Menu
            id="pages"
            anchorEl={pagesAnchorEl}
            keepMounted
            open={Boolean(pagesAnchorEl)}
            onClose={handlePagesClose}
            className={classes.menu}
          >
            {/* appbar menu item inside          */}
            <MenuItem onClick={handlePagesClose}>Page 1</MenuItem>
            <MenuItem onClick={handlePagesClose}>Page 2</MenuItem>
            <MenuItem onClick={handlePagesClose}>Page 3</MenuItem>
          </Menu>
        </div>
        <div className={classes.smallNav}>
          <Typography className={classes.stackText}>
            <strong> stack </strong>
          </Typography>
          <MenuIcon className={classes.menuIcon} />
        </div>
        <div className={classes.appBarDiv}>
          <Button className={classes.tryBuilder} variant="outlined">
            <strong> TRY BUILDER</strong>
          </Button>
          <Button className={classes.buyNow}>
            <strong>BUY NOW</strong>
          </Button>
          {/* <MenuIcon className={classes.menuIcon} /> */}
        </div>

      </div>
        <div className={classes.container}></div>
    </>
  );
}

export default Navbar;
