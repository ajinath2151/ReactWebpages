import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>(({
  container: {
    marginTop:theme.spacing(8),
    position:"sticky",
    top:65,
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
