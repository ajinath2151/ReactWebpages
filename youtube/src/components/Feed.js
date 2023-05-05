import { Container, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme)=>(({
  container: {
    marginTop:theme.spacing(8),
  },
})));

const Feed = () => {

  const classes = useStyles();
  return (
    <Container className={classes.container}>      
      Feed
    </Container>
  );
};

export default Feed;