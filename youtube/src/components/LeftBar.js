import { Container, Typography, makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({}));

const LeftBar = () => {
  const classes = useStyles();
  return (
    <Container>      
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
    </Container>
  );
};

export default LeftBar;
