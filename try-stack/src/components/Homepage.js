import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../src/App.css";
import GirlWithBagImg from "../images/background/GirlWithBag.jpg";
import { AppBar, Button, Link, Toolbar } from "@material-ui/core";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  // container: {
  //   backgroundImage: `url(${GirlWithBagImg})`,
  //   backgroundSize: "cover",
  //   height: 570,
  // },
  // item: {
  //   "&:hover": {
  //     backgroundColor: "red",
  //   },
  // },
}));

function Homepage() {
  const classes = useStyles();

  return (
    <>
      {/* <div className={classes.container}>
        <AppBar className={classes.apBar}>
          <Toolbar className={classes.toolBar}>            
            <Button>Home <KeyboardArrowDown /> </Button>
            <Button>Pages <KeyboardArrowDown />  </Button>
            <Button>Block <KeyboardArrowDown /> </Button>
            <Button className={classes.item}>Elements <KeyboardArrowDown /> </Button>              
          </Toolbar>
        </AppBar>
      </div>   */}
      homepage
    </>
  );
}

export default Homepage;
