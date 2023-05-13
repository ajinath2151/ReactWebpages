import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import '../../src/App.css';
import GirlWithBagImg from '../images/background/GirlWithBag.jpg';
import { AppBar, Button, Link, Toolbar } from '@material-ui/core';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
const useStyles = makeStyles((theme)=>({
  container: {    
    backgroundImage: `url(${GirlWithBagImg})`,
    backgroundSize: 'cover',     
    height:570,    
  },
  }));

function Homepage() {

  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <AppBar className={classes.apBar}>
          <Toolbar className={classes.toolBar}>            
            <Button>Home</Button>
            <Button>Home </Button>
            <Button>Home</Button>
            <Button>Home</Button>
            <Button>Home <KeyboardArrowDown /></Button>
   
          </Toolbar>
        </AppBar>
      </div>  
    </>
  )
}

export default Homepage
