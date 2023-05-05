import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>(({
  container: {
    marginTop:theme.spacing(8),
  },
})));

const RightBar = () => {

  const classes = useStyles();
  return (
    <Container className={classes.container}>      
        RightBar
    </Container>
  );
};

export default RightBar;